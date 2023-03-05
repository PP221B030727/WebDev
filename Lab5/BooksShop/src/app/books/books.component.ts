import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit{
  private bookService = new BooksService();


  constructor(private booksService : BooksService) {
    this.books = this.booksService.getBook(); // Достаем книги из ангуляра Dependensi injection
  }
  //компонент берет книги из сервиса и он только может взять 
  books : Book[] = [];
  

  card : Book[] = [];
  


  isShowing : boolean = true;

  myName  : String = '';

  handleClick() {  
    // alert("I am working!!! ")
    
    if(this.isShowing){
      this.isShowing = false
    }
    else{
      this.isShowing = true 
    }
  }
  handleInput(event : any){
    // alert("alsdef")
    // console.log(event)
    // console.log(event.target.value); 
    this.myName = event.target.value;
  }
  toggleBook(){
    this.isShowing = !this.isShowing
  }
  addToCard(book : any){
    console.log(book);
  }
  
  ngOnInit(): void {
  

  }
}
