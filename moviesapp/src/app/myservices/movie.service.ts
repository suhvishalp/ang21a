import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public apiUrl: string = 'http://localhost:3900/api/movies'

  constructor(public http: HttpClient) { }

  public getMovies() {
    return this.http.get<Movie[]>(this.apiUrl)
  }

  public getMovie(movieId: string) {

  }

  public save(movie: Movie) {

  }

  public delete(movieId: string) {
    return this.http.delete<Movie>(this.apiUrl + '/' + movieId)
      .pipe(
        catchError(this.handleError)
      )
  }

  public handleError(error: HttpErrorResponse) {

    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      //server error 
      errorMessage = 'Error : ' + error.error.message;
      console.log('something went wrong..')
    } else {
      //client error 
      errorMessage = 'Error : ' + error.error;
    }

    return throwError(errorMessage)
  }

}
