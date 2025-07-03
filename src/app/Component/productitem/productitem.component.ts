import { RouterLink } from '@angular/router';
import { Product } from './../../interfaces/iproduct';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productitem',
  imports: [RouterLink],
  templateUrl: './productitem.component.html',
  styleUrl: './productitem.component.scss'
})
export class ProductitemComponent {
  @Input() itemQ!:Product;
  constructor(){}
}
