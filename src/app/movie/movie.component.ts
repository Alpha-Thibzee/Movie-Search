import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : string = 'Die Hard';
  movieData : any;
  constructor() { }

  ngOnInit(): void {
    this.getMovieData();
  }
  getMovieData() : void {
    fetch(`http://www.omdbapi.com/?apikey=2f2d427&s=${this.movie}`)
    
    .then(response=>response.json())
    //.then(data=>console.log(data));
    .then(data=>this.setMovieData(data));
  }
 
  setMovieData(data:any) : void {

    //this.movieData=data;
    this.movieData=data.Search;
    
    //this.movieData.imdbID = (this.movieData.imdbID);
    this.movieData.Title = (this.movieData.Title);
    this.movieData.Country = (this.movieData.Country);
    this.movieData.Year = (this.movieData.Year);
    this.movieData.Poster = (this.movieData.Poster);
  
  
  
  
  }
    
    

    searchMovie() : void{
      this.getMovieData();
    }
} 
//