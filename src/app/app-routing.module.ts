import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'category', component: CategoriesComponent},
  {path:'category/:cname', component:SingleCategoryComponent},
  {path:'category/:cname/:product', component:ProductComponent},
  {path:'', redirectTo:'/category', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
