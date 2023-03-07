import { Component , Input } from '@angular/core';
import { album } from '../types/album';
import { AlbumsService } from './albums.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent{
  


  albumsInfo : album[] = [];
  private albumsService = new AlbumsService();
  isShow : boolean = true;
  lst : string = "";
  constructor(private album : AlbumsService) {
    this.albumsInfo = album.getAlbums();
    // this.albumsInfo = album.getAlbums();
    
  }
  
  
  albumsFil : album[] = this.albumsInfo;


  strtoInt(x:string){
    console.log(parseInt(x)+1);
    return parseInt(x);
  }


  getAlbumsInfo(){
    return this.albumsInfo;
  }
  set setSearchTerm(value: string) {
    this.lst = value;
    this.albumsFil = this.filterAlbums(value);
  }

  filterAlbums(searchString: string) {
    return this.albumsInfo.filter(album =>album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }




}
