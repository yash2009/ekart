import { Component, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { FormsModule, NgForm } from '@angular/forms';


import { Ng2SearchPipeModule } from 'ng2-search-filter';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }
  products = [];
  tAmt = 0;
  qty:number = 1;
  quant =[];

  source: string;
  
  ngOnInit() {
    
  
    this.products = JSON.parse(localStorage.addCart);
    this.total();
    

    
    
    console.log(this.products);
  }
  quantity(quan, i) {
    console.log(quan);
    console.log("changed");
    if (localStorage.addCart) {
      this.products = JSON.parse(localStorage.addCart);
      this.products[i].qty = parseInt(quan);
      localStorage.addCart = JSON.stringify(this.products);
    }
    this.total();
    console.log(this.products);
  }

  total(){
    this.tAmt=0;
    for(var i=0;i<this.products.length;i++)
    {
      this.tAmt  = this.tAmt + this.products[i].price*this.products[i].qty;

    }
    console.log(this.tAmt);
  }

  delete(i){
    console.log(i);
    var dataE = [];
    if(localStorage.addCart)
    {dataE=JSON.parse(localStorage.addCart);
        console.log("deleteData");
        dataE.splice(i,1);
    localStorage.addCart = JSON.stringify(dataE);
  }
  this.products = JSON.parse(localStorage.addCart);
   this.total();
  }

  
  
  



  


}
