import { Routes } from '@angular/router';

import { EcomComponent } from './ecom/ecom.component';
import {AddProductComponent} from './add-product/add-product.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
import {SettingComponent} from './setting/setting.component'
import  {NotFoundComponent} from './not-found/not-found.component'
import {RegisterComponent} from './register/register.component'
import {LoginComponent} from './login/login.component'
import {ProductCounterComponent} from './product-counter/product-counter.component'
import {AllProductComponent} from './all-product/all-product.component'
export const routes: Routes = [
    {
        path:'',
        component:EcomComponent,
        title:"AllProducts"
    },
    {
        path:'product-details/:id',
        component:ProductDetailsComponent,
        title:"details"
    },
    {
        path:'app-register',
        component:RegisterComponent,
        title:"register"
    },
    {
        path:'app-login',
        component:LoginComponent,
        title:"login"
    },
    
    {
       path: 'add-product/:id',  

        // path:'add-Product',
        component:AddProductComponent
    },
    {
        path:'setting',
        component:SettingComponent
    },
    {
        path:'app-all-product',
        component:AllProductComponent
    },

    // 
    {
        path:'app-product-counter',
        component:ProductCounterComponent,
        title:"Product Cart"
    },
    {
        path:'**',
        component:NotFoundComponent
    },
];
