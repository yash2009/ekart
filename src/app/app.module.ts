import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RequestService } from './request.service';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ElectronicsBuyComponent } from './electronics-buy/electronics-buy.component';
import { FashionBuyComponent } from './fashion-buy/fashion-buy.component';
import { CyclesBuyComponent } from './cycles-buy/cycles-buy.component';
import { SportsBuyComponent } from './sports-buy/sports-buy.component';
import { CartComponent } from './cart/cart.component';
import { INRPipe } from './inr.pipe';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ElecAllComponent } from './elec-all/elec-all.component';
import { FashionAllComponent } from './fashion-all/fashion-all.component';
import { SportsAllComponent } from './sports-all/sports-all.component';
import { CyclesAllComponent } from './cycles-all/cycles-all.component';
import { CarouselModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ElectronicsBuyComponent,
    FashionBuyComponent,
    CyclesBuyComponent,
    SportsBuyComponent,
    CartComponent,
    INRPipe,
    ElecAllComponent,
    FashionAllComponent,
    SportsAllComponent,
    CyclesAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxDatatableModule,
    Ng2SearchPipeModule,
    CarouselModule.forRoot(),
   
  ],
  providers: [RequestService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
