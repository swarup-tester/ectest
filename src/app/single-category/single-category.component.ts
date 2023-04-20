import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{
  category: string = "";
  mainproducts: any;
  products:Array<any>=[];
  constructor(private route: ActivatedRoute, private productService: ProductsService){}
  ngOnInit(): void {
      this.route.params.subscribe((res)=>{
        this.category = res["cname"];
        this.mainproducts = this.productService.getProducts();
        var length = this.mainproducts.length;
        for(var i=0;i<length;i++){
          if(this.mainproducts[i].category == this.category){
            this.products.push(this.mainproducts[i]);
          }
        }
      })
  }
}
