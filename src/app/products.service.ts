import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  categories: any;
  products: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  defaultCategories(categories:Array<any>){
    this.categories = categories;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('categories', JSON.stringify(this.categories))
    }
  }

  getCategories() {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('categories') || '[]')
    }
  }

  defaultProducts(products: Array<any>){
    this.products = products;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('products', JSON.stringify(this.products))
    }
  }
  
  getProducts() {
    if (isPlatformBrowser(this.platformId)) {
      return JSON.parse(localStorage.getItem('products') || '[]')
    }
  }
}
