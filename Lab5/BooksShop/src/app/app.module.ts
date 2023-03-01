
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from './books/books.component';
import { FormsModule } from "@angular/forms";
import { BookComponent } from './book/book.component';
@NgModule(
    {
        declarations:[AppComponent, BooksComponent, BookComponent],//определяю компоненты 1 шаг действий 
        imports:[BrowserModule , FormsModule], // Для того что бы иметь в себе все браузеры 
        bootstrap:[AppComponent]  //Компонент начальной загрузкий  

    }
)
export class AppModule{}