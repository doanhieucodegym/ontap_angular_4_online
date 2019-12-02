import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import {fakeMovies} from '../fake-movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor() { }
  // khai bao ten  bien movie kieu  movie
  movie: Movie = {
    id: 1,
    name: 'Star Wars',
    releaseYear: 1997
  }
  movies = fakeMovies;
   // dinh nghia  ham  khi  click vao
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }

  ngOnInit() {
  }

}
