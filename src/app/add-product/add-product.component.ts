import { FormsModule } from '@angular/forms';
import { Component, OnInit ,Input ,inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductRequestService} from '../service/product-request.service'
import { CounterServiceService } from '../service/counter-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
    productId!: number;
   @Input() id:string=''
   counter: number = 1;
   isDeleted: boolean = false; 

   

 counterService = inject(CounterServiceService);
     constructor(
               private productRequestService: ProductRequestService,
               private route: ActivatedRoute
      ) {}
   
   product: any;
    // getProductDetails(id: string) {
    //   this.productRequestService.getProductDetails(id).subscribe(
    //       (response: any) => {
    //           this.product = response;
    //       },
    //       (error) => {
    //           console.error('Error fetching product details:', error);
    //       }
    //       );
    //   }
    ngOnInit() {
      this.route.paramMap.subscribe(params => {
         const id = params.get('id');  
         if (id) {
         this.getProductDetails(id);
         }
      this.counterService.getCounter().subscribe(res => this.counter = res)

     });
     }
 
    //  decreaseCounter(){
    //   if(this.counter <= 1){
    //     this.counter = 1;

    //   }else {
    //     this.counter -= 1;
    //   }
    //   this.counterService.changeCounter(this.counter - 1)
    // }
  
    // increaseCounter(){
    //   this.counterService.changeCounter(this.counter + 1)
    // }
  
    //  removeProduct() {
    //   if (this.product) {
    //     this.productRequestService.deleteProduct(this.product.id).subscribe(
    //       (response: any) => {
    //         console.log('Product removed:', response);
    
    //          if (this.counter > 1) {
    //           this.counter -= 1;
    //         } else {
    //           this.counter = 0; 
    //           this.isDeleted = true; 
    //           this.product = []; 
    //         }
    
    //          this.counterService.changeCounter(this.counter);
    //       },
    //       (error) => {
    //         console.error('Error removing product:', error);
    //       }
    //     );
    //   }
    // }
 

    // //////////////////////////////////

    cart: any[] = []; // Initialize cart as an empty array
cartItems: { [key: number]: number } = {}; // Track product quantities


getProductDetails(id: string) {
  this.productRequestService.getProductDetails(id).subscribe(
    (response: any) => {
      this.cart.push(response); // Add product to cart
      this.cartItems[response.id] = 1; // Initialize quantity to 1
    },
    (error) => {
      console.error('Error fetching product details:', error);
    }
  );
}
decreaseCounter(productId: number) {
  if (this.cartItems[productId] > 1) {
    this.cartItems[productId] -= 1;
  }
}

increaseCounter(productId: number) {
  this.cartItems[productId] += 1;
}
removeProduct(productId: number) {
  this.cart = this.cart.filter(product => product.id !== productId);
  delete this.cartItems[productId]; // Remove quantity tracking
}

getTotalCartPrice(): number {
  return this.cart.reduce((total, product) => {
    return total + (product.price * (this.cartItems[product.id] || 1));
  }, 0);
}
  }
  
