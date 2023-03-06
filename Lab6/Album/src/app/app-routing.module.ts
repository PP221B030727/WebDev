import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumPhotosComponent } from './albums/album-photos/album-photos.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'albums',component:AlbumsComponent},
  {path: 'albums/photos', component:AlbumPhotosComponent}
  // {path: 'albums/:albumId', component: AlbumPhotosComponent },
  // {path: 'albums/album/:albumId', component: AlbumPhotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
