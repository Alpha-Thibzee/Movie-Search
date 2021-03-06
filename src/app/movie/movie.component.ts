import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie : string = '';
  
  movieData : any;
  movieDatasupp:any;
  modal:boolean=false;
  constructor() { }

  ngOnInit(): void {
    // this.getMovieData();
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
    
    
    // this.movieData.imdbID = (this.movieData.imdbID);
    // this.movieData.Title = (this.movieData.Title);
    // this.movieData.Type = (this.movieData.Type);
    // this.movieData.Year = (this.movieData.Year);
    // this.movieData.Poster = (this.movieData.Poster);
    // this.movieData.Id = (this.movieData.imdbID)  ;
    
  }
    searchMovie() : void{
      //this.getMovieData();
      if (this.movie == '' || this.movie.length <= 2) {
        alert('Mets un film valide !!!');
        
      }else{
      this.getMovieData();
    }
    } 


    getMovieDatasupp(imdbID:string) : void {
      fetch(`http://www.omdbapi.com/?apikey=2f2d427&i=${imdbID}`)
      
      
      .then(response=>response.json())
      //.then(data=>console.log(data));
      .then(data=>this.setMovieDatasupp(data));
      this.modal=true;
    }
    setMovieDatasupp(data:any) : void {

      //this.movieData=data;
      this.movieDatasupp=data;
      
      
      // this.movieData.imdbID = (this.movieData.imdbID);
      // this.movieData.Title = (this.movieData.Title);
      // this.movieData.Type = (this.movieData.Type);
      // this.movieData.Year = (this.movieData.Year);
      // this.movieData.Poster = (this.movieData.Poster);
      // this.movieData.Id = (this.movieData.imdbID)  ;
      
    }
} 
//
