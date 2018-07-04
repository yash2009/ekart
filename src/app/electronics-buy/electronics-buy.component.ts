import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { RequestService } from "../request.service";

import { Router,ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-electronics-buy',
  templateUrl: './electronics-buy.component.html',
  styleUrls: ['./electronics-buy.component.css']
})
export class ElectronicsBuyComponent implements OnInit {

  
  
  quan: number;
  id: number;
  
  constructor(private request:RequestService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.get();
    this.id = +this.route.snapshot.params.id;
   
  }

  data ;
  

  

  get() {
    this.request.getdata().subscribe(data => {
      
      this.data=data;
    
    });
  }

  dataE=[];
name:string;
price:number;
src:string;
 addCart(){
 
if(localStorage.addCart)
{
  this.quan=1;
  this.dataE=JSON.parse(localStorage.addCart);
this.name = this.data.electronics[this.id].name;
this.price = this.data.electronics[this.id].price;
this.src=this.data.electronics[this.id].images[0].image1;

for(var i=0;i<this.dataE.length;i++)
{
  if(this.dataE[i].image==this.src)
  {
    this.quan= this.dataE[i].qty + 1;
    this.dataE.splice(i,1);
    localStorage.addCart = JSON.stringify(this.dataE);

  }
}

var obj = { id: this.id, name: this.name, price: this.price, qty:this.quan,image:this.src};

this.dataE.push(obj);
  console.log(this.dataE);
localStorage.addCart = JSON.stringify(this.dataE);}
else{

this.name = this.data.electronics[this.id].name;
this.price = this.data.electronics[this.id].price;
this.src=this.data.electronics[this.id].images[0].image1;

var obj = { id: this.id, name: this.name, price: this.price, qty:1 ,image:this.src};

console.log(this.dataE);
this.dataE.push(obj);

localStorage.addCart = JSON.stringify(this.dataE);
}
}





}
