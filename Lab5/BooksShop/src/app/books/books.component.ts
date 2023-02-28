import { Component, OnInit } from '@angular/core';


interface Book {
  src : string,
  name : string,
  author : string
}


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent{
  books : Book[] = [
    {
      src : 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg', // ссылка на фото
      name : 'Clean Code',//Добавляем елемент имя
      author : 'Robert C Martin', // Доьавляем елемент автор
    },
    {
      src : 'https://miro.medium.com/max/362/0*C0krYKx7Ws9dSsPI.jpg',
      name : 'Pragmatic Programmer',
      author : 'David Thomas',
    }  
  ]
  


  


  isShowing : boolean = false;

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
}
