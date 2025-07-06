import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/iproduct';
import { ProductitemComponent } from '../productitem/productitem.component';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product',
  imports: [ProductitemComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  readonly _products = inject(ProductService)
  products!: Product[];
  

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this._products.getproducts().subscribe({
      next: (res => {
        this.products = res.filter(p => p.category === "men's clothing");
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
