import { Component,OnInit, Input } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { album } from '../types/album';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{
  albumsFil : album[];
  albumsInfo : album[];
  isShow : boolean = true;
  lst : string = "";
  newAlbum : album;
  constructor(private albumServ : AlbumService) {
      this.albumsInfo = [];
      this.albumsFil = [];
      this.newAlbum = {} as album;
  }
  set setSearchTerm(value: string) {
    this.lst = value;
    this.albumsFil = this.filterAlbums(value);
  }
  
  ngOnInit(): void {
    this.albumServ.getAlbums().subscribe((albumsInfo)=>{
      this.albumsInfo = albumsInfo;
    })
  }
  filterAlbums(searchString: string) {
    return this.albumsInfo.filter(album =>album.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  removeAlbum(id: number){
    this.albumsFil = this.albumsFil.filter((x) => x.id !== id);
    this.albumsInfo = this.albumsInfo.filter((x) => x.id !== id);
  }
  addAlbum(){
    if(this.newAlbum.title.length == 0 || this.newAlbum.id <= this.albumsInfo[this.albumsInfo.length-1].id){
      return;
    }
    this.newAlbum.userId = this.albumsInfo[0].userId;
    this.albumServ.addAlbum(this.newAlbum).subscribe((album) =>{
      this.albumsInfo.unshift(album);
    })
  }
}
