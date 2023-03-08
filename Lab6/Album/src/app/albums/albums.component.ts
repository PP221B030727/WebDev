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
  constructor(private albumServ : AlbumService) {
      this.albumsInfo = [];
      this.albumsFil = [];
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
}
