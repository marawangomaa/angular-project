import { Component, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { CategoriesComponent } from "../categories/categories.component";


@Component({
  selector: 'app-home',
  imports: [ProductComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  

  @ViewChild('lazyContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  @ViewChild('trigger', { static: true }) trigger!: ElementRef;

  observer!: IntersectionObserver;
  loaded = false;

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.loaded) {
        this.loadLazyComponent();
        this.observer.disconnect(); // Load only once
      }
    });

    this.observer.observe(this.trigger.nativeElement);
  }


  async loadLazyComponent() {
    const { HomeproductComponent } = await import("../homeproduct/homeproduct.component");
    this.container.createComponent(HomeproductComponent);
    this.loaded = true;
  }
}
