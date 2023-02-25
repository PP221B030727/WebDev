
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
@NgModule(
    {
        declarations:[AppComponent],//определяю компоненты 1 шаг действий 
        imports:[BrowserModule], // Для того что бы иметь в себе все браузеры 
        bootstrap:[AppComponent]  //Компонент начальной загрузкий  

    }
)
export class AppModule{}