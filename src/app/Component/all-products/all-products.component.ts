import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/iproduct';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-products',
  imports: [RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  readonly _products = inject(ProductService);
  products! : Product[];
  productSub!: Subscription;

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productSub = this._products.getproducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      },
      complete: () => {
        console.log('Product fetching completed');
      }
    });
  }

  ngOnDestroy(): void {
    if (this.productSub) {
      this.productSub.unsubscribe();
    }
  }
}
