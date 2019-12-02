import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
// ko  laay truc tiep qua  day  ma  lay tu service
// import {fakeMovies} from '../fake-movies';
import {MovieService} from '../movie.service';

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
  // movies = fakeMovies;
  // ko  lay truc  tiep ma  lay qua  service
  movies: Movie[];
  constructor(private movieService: MovieService) { }
  // viet  ham lay du lieu  do vao movieService
  getMoviesFormServices(): void {
    // this.movies = this.movieService.getMovies();
    // theo doi su thay  doi
    this.movieService.getMovies().subscribe(
      (updateMovies) => {
        this.movies = updateMovies;
      }
    );
  }
  ngOnInit() {
    this.getMoviesFormServices();
  }


   // dinh nghia  ham  khi  click vao
  selectedMovie: Movie;
  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
    console.log(`selectedMovie = ${JSON.stringify(this.selectedMovie)}`);
  }



}
