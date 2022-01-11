import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { CommentComponent } from './comment/comment.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'movie', component: MovieComponent},
    {path: 'comment', component: CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
