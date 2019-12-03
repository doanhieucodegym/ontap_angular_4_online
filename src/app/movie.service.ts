import { Injectable } from '@angular/core';
import {fakeMovies} from './fake-movies';
import {Movie} from './models/movie';
// loadingdata asynchrously
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError , map , tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // gia lap  du lieu
  // tao locoahot cho service
  private moviesURL = ' http://localhost:3000/movies';
 getMovies(): Observable <Movie[]>  {
   // return of (fakeMovies) ;
   return this.http.get<Movie[]>(this.moviesURL).pipe(
     tap(receivedMovies => console.log(`receivedMovies = ${JSON.stringify(receivedMovies)}`)),
     catchError(error => of([]))
   );
 }
 getMovieFormId(id: number): Observable<Movie> {
   // return of(fakeMovies.find(movie => movie.id === id));
   const url = `${this.moviesURL}/${id}`;
   return this.http.get<Movie>(url).pipe(
     tap(selectedMovie => console.log(`selected movie = ${JSON.stringify(selectedMovie)}`)),
     catchError(error => of(new Movie()))
   );
 }
  /** PUT: update the movie on the server , update thong tin*/
  updateMovie(movie: Movie): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(`${this.moviesURL}/${movie.id}`, movie, httpOptions).pipe(
      tap(updatedMovie => console.log(`updated movie = ${JSON.stringify(updatedMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }
  constructor(
    private http: HttpClient,
    public  messageService: MessageService) { }
}
