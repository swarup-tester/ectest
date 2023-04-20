import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModifyurlPipe } from './modifyurl.pipe';
import { ExcerptPipe } from './excerpt.pipe';
import { RelatedProductsComponent } from './related-products/related-products.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    SingleCategoryComponent,
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    ModifyurlPipe,
    ExcerptPipe,
    RelatedProductsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
