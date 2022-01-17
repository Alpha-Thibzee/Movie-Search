import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/models/comment';
import { TodoService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  title : string = '';
  //description : string = '';
  public allTodos! : Todo[];

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  addToDo(form:any) {
    this.todoService.createTodo(form.value);
    form.reset();
    this.allTodos = this.todoService.getTodos();
    //console.log(form.value);
    
  
  }

}
