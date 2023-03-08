import { Injectable } from '@angular/core';
import { album } from 'src/app/types/album';
import { photo } from '../types/photos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AlbumsPhotosService {
  photos : photo[] = [];
  photosFil : photo[] = [];  
  id : string | null = null ;
  BASE_URL = "https://jsonplaceholder.typicode.com"
  constructor(private client : HttpClient) { }
  getPhotos(id: string | null) : Observable<photo[]>{
    return this.client.get<photo[]>(`${this.BASE_URL}/albums/${id}/photos`)
  }
}