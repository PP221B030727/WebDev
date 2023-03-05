import { Component , EventEmitter, Input, Output , OnInit , OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit{
  @Input()  book : Book = {} as Book;
  @Output() bookEmmiter = new EventEmitter<Book>();
  constructor(private cartService : CartService){

  }
  ngOnInit():void{}
  isInCart : boolean = false;
  addToCard(){
    this.isInCart = true;
    // this.bookEmmiter.emit(this.book);
    // console.log(this.book)
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);

  }
  
  // *ngIf=""
  

}
