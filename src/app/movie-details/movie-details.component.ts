import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../models/movie';
import {Location} from '@angular/common';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  // thuoc tinh cua  movie :
@Input() movie12: Movie;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFormRouter();
  }
  getMovieFormRouter(): void {
    // lay ra objcet id  tu string doi ra so
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    // Call service to "get movie from id" ? movie kia  owr  file MovieService
    this.movieService.getMovieFormId(id).subscribe(movie => this.movie12  = movie);
  }
  save(): void {
    this.movieService.updateMovie(this.movie12).subscribe(() => this.goBack());
  }
  goBack(): void {
    this.location.back();
  }
}
