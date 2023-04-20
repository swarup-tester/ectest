import { Component } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Array<any> = [
    {
      category:"Furnitures",
      image:"../assets/furnitures.jpg",
      desc:"From understanding your requirements, develop a website and delivering the final product."
    },
    {
      category:"Garments",
      image:"../assets/garments.jpg",
      desc:"From understanding your requirements, develop a website and delivering the final product."
    },
    {
      category:"Mobiles",
      image:"../assets/mobiles.jpg",
      desc:"From understanding your requirements, develop a website and delivering the final product."
    }
  ];

  products: Array<any> = [
    {
      name:"ASUS ROG 5s (8GB, 256GB)",
      mrp:"₹65,999",
      price:"₹49,999",
      category:"mobiles",
      image:"../../assets/asus-mobile.jpg",
      desc:"DebRox kids bed mattress is specifically designed to help children grow. Providing the best in support and comfort while utilising environmentally friendly, natural materials so you can feel confident your child is having a healthy and restorative sleep."
    },
    {
      name:"Urbano Fashion Jeans",
      mrp:"₹1,599",
      price:"₹899",
      category:"garments",
      image:"../../assets/urbano-jeans.png",
      desc:"DebRox kids bed mattress is specifically designed to help children grow. Providing the best in support and comfort while utilising environmentally friendly, natural materials so you can feel confident your child is having a healthy and restorative sleep."
    },
    {
      name:"Vebnor Formal Shirt",
      mrp:"₹1,999",
      price:"₹999",
      category:"garments",
      image:"../../assets/men-shirt.png",
      desc:"DebRox kids bed mattress is specifically designed to help children grow. Providing the best in support and comfort while utilising environmentally friendly, natural materials so you can feel confident your child is having a healthy and restorative sleep."
    },
    {
      name:"Acton Men Track Pants",
      mrp:"₹1,299",
      price:"₹599",
      category:"garments",
      image:"../../assets/trouser.png",
      desc:"DebRox kids bed mattress is specifically designed to help children grow. Providing the best in support and comfort while utilising environmentally friendly, natural materials so you can feel confident your child is having a healthy and restorative sleep."
    },
    {
      name:"Lifestyle Royal 6 Seater Sofa",
      mrp:"₹59,999",
      price:"₹49,99",
      category:"furnitures",
      image:"../../assets/royal-sofa.jpg",
      desc:"DebRox kids bed mattress is specifically designed to help children grow. Providing the best in support and comfort while utilising environmentally friendly, natural materials so you can feel confident your child is having a healthy and restorative sleep."
    },
    {
      name:"DebRox Rounded Wooden Table",
      mrp:"₹199,999",
      price:"₹149,99",
      category:"furnitures",
      image:"../../assets/wooden-table.jpg",
      desc:"DebRox kids bed mattress is specifically designed to help children grow. Providing the best in support and comfort while utilising environmentally friendly, natural materials so you can feel confident your child is having a healthy and restorative sleep."
    }
  ];

  constructor(private productService: ProductsService){
    this.productService.defaultCategories(this.categories);
    this.productService.defaultProducts(this.products);
  }
}
