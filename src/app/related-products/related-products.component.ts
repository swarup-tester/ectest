import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.css']
})
export class RelatedProductsComponent implements OnInit {
  mainproducts: any;
  params: string = "";
  productDetails: any;
  relatedProducts: Array<any>=[];
  constructor(private route: ActivatedRoute, private productService: ProductsService){}
  ngOnInit(): void {
      this.route.params.subscribe((res)=>{
        this.params = res["product"];
        this.mainproducts = this.productService.getProducts();
        var length = this.mainproducts.length;
        for(var i=0; i<length; i++){
          if(this.mainproducts[i].name.toLowerCase().replace(/ /g, "-") == this.params){
            this.productDetails = this.mainproducts[i];
          } 
        }
      })
      var length = this.mainproducts.length;
      for(var i=0; i<length; i++){
        if(this.mainproducts[i].category==this.productDetails.category && this.productDetails.name!=this.mainproducts[i].name){
            this.relatedProducts.push(this.mainproducts[i]);
        }
      }  
  }

}
