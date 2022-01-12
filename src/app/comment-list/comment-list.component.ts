import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/models/comment';
import { TodoService } from '../services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  @Input() public allTodos! : Todo[];

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }
  

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo);
    this.allTodos = this.todoService.getTodos();
  }
  
}
