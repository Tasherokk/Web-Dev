import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {AlbumsComponent} from "../albums/albums.component";
import {AlbumsService} from "../albums.service";
import {Album} from "../models/Album";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  album !: Album;
  loaded: boolean;
  constructor(private activatedRoute: ActivatedRoute, private albumsService: AlbumsService) {
    this.loaded = false;
  }
  ngOnInit(): void {
    this.getAlbum()
  }
  getAlbum(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.loaded = false;
      if(AlbumsComponent.loadedAlbums.length) {
        this.album = AlbumsComponent.loadedAlbums.find(alb => alb.id === id)!!;
        this.loaded = true
      }
      else this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      })
    })
  }

  changeTitle(newTitle: string){
    this.album.title = newTitle;
    if (this.album) {
      this.albumsService.updateAlbums(this.album)
    }
  }

}
