import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ElectronicsBuyComponent } from './electronics-buy/electronics-buy.component';
import { FashionBuyComponent } from './fashion-buy/fashion-buy.component';
import { SportsBuyComponent } from './sports-buy/sports-buy.component';
import { CyclesBuyComponent } from './cycles-buy/cycles-buy.component';
import { CartComponent } from './cart/cart.component';
import { ElecAllComponent } from './elec-all/elec-all.component';
import { FashionAllComponent } from './fashion-all/fashion-all.component';
import { SportsAllComponent } from './sports-all/sports-all.component';
import { CyclesAllComponent } from './cycles-all/cycles-all.component';
const routes: Routes = [{
  path: 'home', component: HomeComponent
},{path:'electronics-description/:id', component:ElectronicsBuyComponent},{
  path:'fashion-description/:id',component:FashionBuyComponent
},{path:'sports-description/:id', component:SportsBuyComponent},{path:'cycles-description/:id', component:CyclesBuyComponent},{path:'cart', component:CartComponent}
,{path:'electronics', component:ElecAllComponent},{path:'fashion', component:FashionAllComponent},{path:'sports', component:SportsAllComponent},{path:'cycles', component:CyclesAllComponent},{ path: '**', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
