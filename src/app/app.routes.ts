import { Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AllProductsComponent } from './Component/all-products/all-products.component';
import { DetailsComponent } from './Component/details/details.component';
import { CategoriesComponent } from './Component/categories/categories.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'all-products', component: AllProductsComponent, title: 'All Products'},
    {path: 'details/:id', component: DetailsComponent, title: 'Product Details'},
    {path: 'categories', component: CategoriesComponent, title: 'Categories'},
    

    {path: '**', redirectTo:'not-found', pathMatch: 'full'},
    {path: 'not-found', component: HomeComponent, title: 'Not Found'}
];
