import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
 
  // private counter = new BehaviorSubject<number>(0)
  // constructor() {}

  // getCounter(){
  //   return this.counter.asObservable();
  // }

  
  
  private counter = new BehaviorSubject<number>(0);
  
  constructor() {}
  
  getCounter() {
    return this.counter.asObservable();
  }
  
  incrementCounter() {
    this.counter.next(this.counter.value + 1);
  }
  
  changeCounter(newValue : number){
     this.counter.next(newValue)
  }

}
