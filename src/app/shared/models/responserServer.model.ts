import { Product } from './product.model';

export interface ResponseServer {
  code: string;
  products: Product[];
}
