import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {Photo} from "../models/Photo";
import {AlbumsService} from "../albums.service";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{

  photos !: Photo[];
  loaded: boolean;
  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumsService) {
    this.loaded = false;
  }
  ngOnInit(): void {
    this.getPhotos()
  }

  getPhotos(){
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.loaded = false;
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      })
    })
  }

}
