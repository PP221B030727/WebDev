import { Component , Input } from '@angular/core';
import { album } from '../types/album';
import { HttpClient } from '@angular/common/http';
// import { AlbumsService } from './albums.service';
import { AlbumService } from '../services/album.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent{
  
  // albumServ : AlbumsService = new AlbumsService();

  
  // private albumsService ;
  
  
  // setSearchTerm;
  albumsFil;
  albumsInfo;
  isShow;
  lst;

  constructor(album : AlbumService) {
    this.albumsInfo = album.albumsInfo;
    this.albumsFil = album.albumsFil;
    this.isShow = album.isShow;
    this.lst = album.lst;
  }

  
  set setSearchTerm(value: string) {
    this.lst = value;
    this.albumsFil = this.filterAlbums(value);
  }
  getAlbumsInfo(){
    return this.albumsInfo;
  }
  

  filterAlbums(searchString: string) {
    return this.albumsInfo.filter(album =>album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  
  
  

}
