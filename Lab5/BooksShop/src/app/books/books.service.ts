import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBook(){
    return [
      {
        src : 'https://m.media-amazon.com/images/I/41xShlnTZTL.jpg', // ссылка на фото
        name : 'Clean Code',//Добавляем елемент имя
        author : 'Robert C Martin', // Доьавляем елемент автор
        amount : 200 , 
      },
      {
        src : 'https://miro.medium.com/max/362/0*C0krYKx7Ws9dSsPI.jpg',
        name : 'Pragmatic Programmer',
        author : 'David Thomas',
        amount : 412,
      }  ,
      {
        src : 'https://miro.medium.com/max/362/0*C0krYKx7Ws9dSsPI.jpg',
        name : 'Pragmatic Programmer',
        author : 'David Thomas',
        amount : 412,
      }  ,
      {
        src : 'https://miro.medium.com/max/362/0*C0krYKx7Ws9dSsPI.jpg',
        name : 'Pragmatic Programmer',
        author : 'David Thomas',
        amount : 412,
      }  
    ];
  }
}
