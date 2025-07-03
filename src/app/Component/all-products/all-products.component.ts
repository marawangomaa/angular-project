import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  readonly _products = inject(ProductService);
  products = this._products.products;
}
