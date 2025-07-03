import { Injectable } from '@angular/core';
import { Icategory } from '../interfaces/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    categories : Icategory[] =[
    {image: 'assets/imgs/1.webp', describtion: 'Category 1'},
    {image: 'assets/imgs/2.jpg', describtion: 'Category 2'},
    {image: 'assets/imgs/3.jpg', describtion: 'Category 3'},
    {image: 'assets/imgs/4.png', describtion: 'Category 4'},
    {image: 'assets/imgs/5.png', describtion: 'Category 5'}
  ]

  getThreeCategories(): Icategory[] {
    return this.categories.slice(0, 3);
  }
  getAllCategories(): Icategory[] {
    return this.categories;
  }
}
