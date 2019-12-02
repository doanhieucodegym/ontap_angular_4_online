import { Injectable } from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from './models/movie';
// loadingdata asynchrously
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // gia lap  du lieu
 getMovies(): Observable <Movie[]>  {
   return of (fakeMovies) ;
 }
  constructor() { }
}
