import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlbumsComponent } from "./albums.component";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component";
NgModule({
    declarations:[AlbumsComponent,AlbumPhotosComponent],
    imports:[CommonModule],
    providers:[],
    exports:[]
})
export class AlbumsModule{

}