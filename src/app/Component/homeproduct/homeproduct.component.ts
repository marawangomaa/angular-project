import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../interfaces/iproduct';
import { ProductitemComponent } from "../productitem/productitem.component";

@Component({
  selector: 'app-homeproduct',
  imports: [ProductitemComponent],
  templateUrl: './homeproduct.component.html',
  styleUrl: './homeproduct.component.scss'
})
export class HomeproductComponent {
  readonly _products = inject(ProductService)
  products!: Product[];
  

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this._products.getproducts().subscribe({
      next: (res => {
        this.products = res;
      }),
      error: (err => {
        console.error('Error fetching products:', err);
      }),
      complete: () => {
        console.log('Product fetching completed');
      }
    })
  }
}
