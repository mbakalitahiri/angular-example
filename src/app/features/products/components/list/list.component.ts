import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ResourceRef,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../../shared/models/product.model';
import { ProductService } from '../../../../shared/services/products.service';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  service = inject(ProductService);
  products: ResourceRef<Product[]> = this.service.products;

  constructor() {
    console.log(this.service.productResource.value());
  }

  selectedProduct = signal<Product | null>(null);
  onSelectedProduct(product: Product) {
    this.selectedProduct.set(product);
    this.service.selectedProduct.set(product.id);
  }
}
