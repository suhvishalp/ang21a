import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie.model';
import { MovieService } from '../myservices/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public movieList:Movie[] = [];

  constructor(public movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies()
          .subscribe(
            (response:Movie[])=>{
              this.movieList = response;
            },
            (error:HttpErrorResponse)=>{
              console.log(error)
            }
          )
  }

  handleRemove(movie:Movie){
    this.movieService.delete(movie._id)
        .subscribe(
          (response:Movie)=>{
            const index = this.movieList.findIndex(m => m._id === response._id)
            this.movieList.splice(index,1);
          },
          (errorMessage:string)=> {
              console.log(errorMessage)
          }
        )
  }

}
