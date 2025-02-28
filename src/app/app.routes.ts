import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { ProductsComponent } from './features/pages/products/products.component';
import { CategoriesComponent } from './features/pages/categories/categories.component';
import { BrandsComponent } from './features/pages/brands/brands.component';
import { NotFoundComponent } from './features/layout/not-found/not-found.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { authGuard } from './core/guards/auth/auth.guard';
import { ProductDetailsComponent } from './features/pages/product-details/product-details.component';
import { AllOrdersComponent } from './features/pages/all-orders/all-orders.component';
import { AddressComponent } from './features/pages/address/address.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path :'home' , component:HomeComponent , canActivate : [authGuard] , title:"Home"},
    {path :'cart' , component:CartComponent , canActivate : [authGuard] , title:"Cart"},
    {path :'products' , component:ProductsComponent , canActivate : [authGuard] , title:"Categories"},
    {path :'categories' , component:CategoriesComponent , canActivate : [authGuard] ,title:"Cart" },
    {path :'brands' , component:BrandsComponent , canActivate : [authGuard] , title:"Brands"},
    {path :'allOrders' , component:AllOrdersComponent , canActivate : [authGuard] , title:"All Orders"},
    {path :'address' , component:AddressComponent , canActivate : [authGuard] , title:"Address"},
    {path :'productDetails/:id' , component:ProductDetailsComponent , canActivate : [authGuard] , title:"product details"},

    {path :'login' , component:LoginComponent},
    {path :'register' , component:RegisterComponent},
    {path:'**' , component:NotFoundComponent}
    
];
