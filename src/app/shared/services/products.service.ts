import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, map, of, tap } from 'rxjs';
import { ResponseServer } from '../models/responserServer.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private url = 'http://localhost:8080/api/products';

  selectedProduct = signal<number>(1);

  products = resource({
    loader: () => {
      return fetch('http://localhost:8080/api/products')
        .then((response) => response.json()) // ← Parsea la respuesta como JSON
        .then((data) => {
          console.log(data.products);
          return data.products; // ← Ahora muestra el contenido real
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    },
  });

  productResource = rxResource({
    params: this.selectedProduct,
    stream: () =>
      this.http
        .get<ResponseServer>(`${this.url}/${this.selectedProduct()}`)
        .pipe(
          map((data) => data),
          tap((data) => console.log(data)),
          catchError(() => of([]))
        ),
  });
}
