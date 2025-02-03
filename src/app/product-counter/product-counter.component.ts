import { Component, inject } from '@angular/core';
import { CounterServiceService } from '../service/counter-service.service';
@Component({
  selector: 'app-product-counter',
  imports: [],
  templateUrl: './product-counter.component.html',
  styleUrl: './product-counter.component.css'
})
export class ProductCounterComponent {
  counter: number = 0;
  counterService = inject(CounterServiceService);
  constructor() { }

  ngOnInit() {
    this.counterService.getCounter().subscribe(res => this.counter = res)
  }

  decreaseCounter(){
    this.counterService.changeCounter(this.counter - 1)
  }

  increaseCounter(){
    this.counterService.changeCounter(this.counter + 1)
  }
}
