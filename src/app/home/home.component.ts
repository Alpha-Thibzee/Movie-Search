import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livetimer : any;
  constructor() { }

  ngOnInit(): void {
    this.livetimer= moment().format('HH:mm:ss');
  }

  ngAfterContentInit() : void{
    
      //console.log('ok');
      
      //var display = new Date().toLocaleTimeString();
      //document.getElementById('livetimer').innerHTML = display;
      setInterval(()=>{
        this.livetimer = moment().format('HH:mm:ss')
      }, 1000); 
      
  }
   


}

