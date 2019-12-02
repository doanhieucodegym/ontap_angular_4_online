import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  // khai bao ten  bien movie kieu  movie
  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1997
  }
  constructor() { }

  ngOnInit() {
  }

}
