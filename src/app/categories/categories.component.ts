import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Meta } from '@angular/platform-browser';
import { tap } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  categories:any;

  constructor(private productService: ProductsService, private meta: Meta){}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
    //console.log(this.categories[0].category);
    //this.meta.addTag(name:'description',)
  }

}
