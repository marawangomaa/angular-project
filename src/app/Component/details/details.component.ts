import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  product?: Product;
  constructor(private route: ActivatedRoute, private _products: ProductService) { 
    
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProductDetails(id);
  }
  getProductDetails(id: string | null): void {
    this._products.getproducts().subscribe({
      next: (res) => {
        this.product = res.find(p => p.id === Number(id));
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
      },
      complete: () => {
        console.log('Product details fetching completed');
      }
    });
  }
  

}
