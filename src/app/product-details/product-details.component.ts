import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductRequestService} from '../service/product-request.service'
@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
 
           @Input() id:string=''

            product: any;

            constructor(
            private productRequestService: ProductRequestService,
            private route: ActivatedRoute
            ) {}

            ngOnInit() {
             this.route.paramMap.subscribe(params => {
                const id = params.get('id');  
                if (id) {
                this.getProductDetails(id);
                }
            });
            }

        getProductDetails(id: string) {
        this.productRequestService.getProductDetails(id).subscribe(
            (response: any) => {
                this.product = response;
            },
            (error) => {
                console.error('Error fetching product details:', error);
            }
            );
        }


        getStarClasses(rating: number) {
            const roundedRating = Math.round(rating);  
            const starClasses = [];
            for (let i = 0; i < roundedRating; i++) {
            starClasses.push('fa-solid fa-star fullSStar'); //[]
            }

            for (let i = roundedRating; i < 5; i++) {
                starClasses.push('fa-solid fa-star darkStar'); //[]
            }
            return starClasses;
        }
}
