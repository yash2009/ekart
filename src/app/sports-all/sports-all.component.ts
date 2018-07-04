import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";

@Component({
  selector: 'app-sports-all',
  templateUrl: './sports-all.component.html',
  styleUrls: ['./sports-all.component.css']
})
export class SportsAllComponent implements OnInit {

  constructor(private request:RequestService) { }

  ngOnInit() {
    this.get();
  }
  data ;
  products=[];
  get() {
    this.request.getdata().subscribe(data => {
      
      this.data=data;
      this.products =this.data.sports;
      console.log(this.products);
    
    });
  }

}
