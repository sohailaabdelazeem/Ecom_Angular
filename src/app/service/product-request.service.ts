import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {

  constructor(private http:HttpClient) { }

  getProductList():Observable<any>{
    return this.http.get(`https://dummyjson.com/products`)
  }

  // getproductDetaials(id:string):Observable<any>{
  //   return this.http.get(`https://dummyjson.com/products/${id}`)
  // }

  getProductDetails(id: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
  
  addProduct(data:any) {
    return this.http.post(`https://dummyjson.com/products`,data)
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`https://dummyjson.com/products/${id}`);
  }

}
