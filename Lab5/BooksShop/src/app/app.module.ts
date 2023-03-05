
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { BooksComponent } from './books/books.component';
import { FormsModule } from "@angular/forms";
import { BookComponent } from './books/book/book.component';
import { BooksService } from "./books/books.service";
import { BooksModule } from "./books/books.module";
@NgModule(
    {
        declarations:[AppComponent],//определяю компоненты 1 шаг действий 
        imports:[BrowserModule , FormsModule , BooksModule], // Для того что бы иметь в себе все браузеры 
        bootstrap:[AppComponent] , //Компонент начальной загрузкий  
        // providers:[BooksService]
    }
)
export class AppModule{}