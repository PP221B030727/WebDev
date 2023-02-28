import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent{
  src : string = 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg'; // ссылка на фото
  name : string = 'Clean Code';//Добавляем елемент имя
  author : string = 'Robert C Martin'; // Доьавляем елемент автор


  src_2 : string = 'https://miro.medium.com/max/362/0*C0krYKx7Ws9dSsPI.jpg';
  name_2 : string = 'Pragmatic Programmer';
  author_2 : string = 'David Thomas';


  isShowing : boolean = false;

  myName  : String = '';

  handleClick() {  
    alert("I am working!!! ")
    this.isShowing = true 
  }
  handleInput(event : any){
    // alert("alsdef")
    // console.log(event)
    // console.log(event.target.value); 
    this.myName = event.target.value;
  }
}
