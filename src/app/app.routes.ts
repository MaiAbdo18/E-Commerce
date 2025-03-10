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
import { AllordersComponent } from './features/pages/allorders/allorders.component';
import { AddressComponent } from './features/pages/address/address.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { VerifyCodeComponent } from './features/auth/verify-code/verify-code.component';
import { ResetpasswordComponent } from './features/auth/resetpassword/resetpassword.component';

export const routes: Routes = [
    {path:'' , redirectTo:'home', pathMatch:'full'},
    {path :'home' , component:HomeComponent , canActivate : [authGuard] , title:"Home"},
    {path :'cart' , component:CartComponent , canActivate : [authGuard] , title:"Cart"},
    {path :'products' , component:ProductsComponent , canActivate : [authGuard] , title:"Categories"},
    {path :'categories' , component:CategoriesComponent , canActivate : [authGuard] ,title:"Cart" },
    {path :'brands' , component:BrandsComponent , canActivate : [authGuard] , title:"Brands"},
    {path :'allorders' , component:AllordersComponent , canActivate : [authGuard] , title:"All Orders"},
    {path :'address/:cartId' , component:AddressComponent , canActivate : [authGuard] , title:"Address"},
    {path :'productDetails/:id' , component:ProductDetailsComponent , canActivate : [authGuard] , title:"product details"},

    {path :'login' , component:LoginComponent},
    {path :'register' , component:RegisterComponent},
    {path :'forgotpassword' , component:ForgotPasswordComponent},
    {path :'verify-code' , component:VerifyCodeComponent},
    {path :'resetpassword' , component:ResetpasswordComponent},
    {path:'**' , component:NotFoundComponent}
    
];
