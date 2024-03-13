import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AlbumsComponent} from "../albums/albums.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    AlbumsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
