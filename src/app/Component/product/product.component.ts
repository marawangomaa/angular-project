import { Component, inject } from '@angular/core';
import { Product } from '../../interfaces/iproduct';
import { ProductitemComponent } from '../productitem/productitem.component';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product',
  imports: [ProductitemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  readonly _products = inject(ProductService)
  products: Product[] = this._products.products;
}
