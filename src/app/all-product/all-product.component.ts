import { TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
 import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ProductsList} from '../types/products-list'
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { CounterServiceService } from '../service/counter-service.service';
import {ProductRequestService} from "../service/product-request.service"

@Component({
  selector: 'app-all-product',
  imports: [TitleCasePipe],
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent {
    products:any;
    constructor(private ProductRequestService :ProductRequestService  ,private router: Router, private counterService: CounterServiceService ){
      console.log("constructor");
      
    }
    ngOnInit(){
      this.ProductRequestService.getProductList().subscribe((response:any)=> this.products=response.products
      )
    }




    getStarClasses(rating: number) {
      const roundedRating = Math.round(rating);
      const starClasses = [];
      for (let i = 0; i < roundedRating; i++) {
        starClasses.push('fa-solid fa-star fullSStar');
      }
      return starClasses;
    }
  
    navigateToAddProduct(productId: number) {
      this.counterService.incrementCounter(); 
      this.router.navigate(['/add-product', productId]);
    }
  
    handleRedirect(id: number) {
      this.router.navigate(['/product-details', id]);
    }













     
  
}
