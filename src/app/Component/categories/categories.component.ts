import { Component, Input } from '@angular/core';
import { Icategory } from '../../interfaces/icategory';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  
  categories!: Icategory[];
  
  @Input() lim: number | null = null;

  constructor(private _category : CategoryService){}

  ngOnInit(): void {
    this.categories = this._category.getAllCategories();
    this.categories = this.lim ? this.categories.slice(0, this.lim) : this.categories;
  }
}
