import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  

  @Input() public movieDatasupp!:any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.movie);
  }

  

}
