import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Todo } from 'src/models/comment';

@Component({
  selector: 'app-comment-info',
  templateUrl: './comment-info.component.html',
  styleUrls: ['./comment-info.component.css']
})
export class CommentInfoComponent implements OnInit {

  @Input() todo!:Todo;
  @Output() deleteTodo = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }

  delete(todo : Todo){
  this.deleteTodo.emit(todo);
}
}
