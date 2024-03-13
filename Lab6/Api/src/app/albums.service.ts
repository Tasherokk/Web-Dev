import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Album} from "./models/Album";
import {Photo} from "./models/Photo";
import {AlbumsComponent} from "./albums/albums.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  BASE_URl = "https://jsonplaceholder.typicode.com/albums";
  constructor(private httpClient: HttpClient) { }

  getAlbums() : Observable<Album[]> {
    return this.httpClient.get<Album[]>(`${this.BASE_URl}`)
  }

  getAlbum(id:number) : Observable<Album>{
    return this.httpClient.get<Album>(`${this.BASE_URl}/${id}`);
  }

  getPhotos(albumId: number) : Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`${this.BASE_URl}/${albumId}/photos`);
  }

  updateAlbums(album: Album) {
    AlbumsComponent.loadedAlbums = AlbumsComponent.loadedAlbums.map(oldAlbum => album.id === oldAlbum.id ? album : oldAlbum)
  }

  deleteAlbum(album: Album) {
    AlbumsComponent.loadedAlbums = AlbumsComponent.loadedAlbums.filter(oldAlbum => oldAlbum.id !== album.id);
  }

}
