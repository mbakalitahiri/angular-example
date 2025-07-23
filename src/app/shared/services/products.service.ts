import { HttpClient } from '@angular/common/http';
import { inject, Injectable, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
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
    request: () => this.selectedProduct,
    loader: (params: any) => {
      // Return the observable directly
      return this.http.get<ResponseServer>(`${this.url}/${params}`).pipe(
        catchError((error) => {
          console.error(error);
          return of(null); // Return null on error or handle accordingly
        })
      );
    },
  });
}
