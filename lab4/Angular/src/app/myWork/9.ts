// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {input,output} from '@angular/core';


// @Component({
//   selector:'app-user',
//   template:`<p>The users name is {{name()}}</p>`
// })

// export class User{
//   name = input<string>();
// }

// @Component({
//   selector:'app-child',
//   template:`
//   <button class="btn" (click)="addItem()">Add Item</button>
//   `,
//   styles:`
//   .btn{
//   padding:5px;
//   }
//   `
// })

// export class Child{
//   // count = 0;
//   // incrementCountEvent = output<number>();

//   addItemEvent = output<string>();
//   addItem(){
//     this.addItemEvent.emit('черепаха');
//   }
//   // onClick(){
//   //   this.count++;
//   //   this.incrementCountEvent.emit(this.count);
//   // }
  
// }

// @Component({
//   selector: 'app-root',
//   imports: [Child],
//   template:`
//     <app-child (addItemEvent)="addItem($event)" />
//     <p>🐢 all the way down {{ items.length }}</p>
//   `,
//   styles: `
//   :host {color:#a144eb;}`
// })
// export class App {
//   items = new Array();

//   addItem(item: string){
//     this.items.push(item);
//   }
// }

