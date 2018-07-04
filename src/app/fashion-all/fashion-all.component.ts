import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";

@Component({
  selector: 'app-fashion-all',
  templateUrl: './fashion-all.component.html',
  styleUrls: ['./fashion-all.component.css']
})
export class FashionAllComponent implements OnInit {

  constructor(private request:RequestService) { }

  ngOnInit() {
    this.get();
  }
  data ;
  products=[];
  get() {
    this.request.getdata().subscribe(data => {
      
      this.data=data;
      this.products =this.data.fashion;
      console.log(this.products);
    
    });
  }

}
