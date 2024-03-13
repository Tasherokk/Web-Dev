import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Album} from "../models/Album";
import {Photo} from "../models/Photo";
import {AlbumsService} from "../albums.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  static loadedAlbums: Album[] = [];
  albums: Album[] = []
  loaded: boolean;

  constructor(private albumsService: AlbumsService) {
    this.loaded = false
  }

  ngOnInit(): void {
    if(!AlbumsComponent.loadedAlbums.length)this.getAlbums();
    else {
      this.albums = AlbumsComponent.loadedAlbums
      this.loaded = true
    }
  }

  getAlbums(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      AlbumsComponent.loadedAlbums = this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(album: Album) {
    this.albumsService.deleteAlbum(album)
    this.albums = AlbumsComponent.loadedAlbums
  }

}
