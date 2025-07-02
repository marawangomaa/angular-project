import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ProductComponent } from "../product/product.component";
import { CategoriesComponent } from "../categories/categories.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [NavComponent, ProductComponent, CategoriesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
