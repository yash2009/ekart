import { Component, OnInit } from '@angular/core';
import { RequestService } from "../request.service";

@Component({
  selector: 'app-cycles-all',
  templateUrl: './cycles-all.component.html',
  styleUrls: ['./cycles-all.component.css']
})
export class CyclesAllComponent implements OnInit {

  constructor(private request:RequestService) { }

  ngOnInit() {
    this.get();
  }
  data ;
  products=[];
  get() {
    this.request.getdata().subscribe(data => {
      
      this.data=data;
      this.products =this.data.cycles;
      console.log(this.products);
    
    });
  }

}
