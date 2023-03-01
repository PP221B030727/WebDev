import { Component , EventEmitter, Input, Output , OnInit , OnDestroy } from '@angular/core';
import { interval } from 'rxjs';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit , OnDestroy{
  @Input()  book : Book = {} as Book;
  @Output() bookEmmiter = new EventEmitter<Book>();
  addToCard(){
    this.bookEmmiter.emit(this.book);
    console.log(this.book)
  }
  myInterval : any = null; 
  ngOnInit():void{
    this.myInterval =  setInterval(()=>{
      console.log('Hello world')
    },1000)

  }
  ngOnDestroy():void{
    clearInterval(this.myInterval);
    console.log({ onDestroy : 'OnDestroy'})
  }

}
