import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>

  `
})

export class CounterComponent {
  constructor() { }

  public counter = 10;

  increaseBy( value: number):number{
    const increment = this.counter += value;
    return increment
  }

  resetCounter():number{
    const reset = this.counter = 10;
    return reset
  }

}
