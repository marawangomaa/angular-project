import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { CategoriesComponent } from "../categories/categories.component";
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CategoriesComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
}
