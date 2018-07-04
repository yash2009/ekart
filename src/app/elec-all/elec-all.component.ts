import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";

@Component({
  selector: 'app-elec-all',
  templateUrl: './elec-all.component.html',
  styleUrls: ['./elec-all.component.css']
})
export class ElecAllComponent implements OnInit {

  constructor(private request:RequestService) { }

  ngOnInit() {
    this.get();
  }
  data ;
  products=[];
  get() {
    this.request.getdata().subscribe(data => {
      
      this.data=data;
      this.products =this.data.electronics;
      console.log(this.products);
    
    });
  }

}
