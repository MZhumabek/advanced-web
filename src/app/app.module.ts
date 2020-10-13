import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopComponent } from './components/shop/shop.component';
import { OrderComponent } from './components/shop/order/order.component';
import {TempConverterPipe} from "./components/pipes/temp-converter.pipe";
import {HoverDirective} from "./components/shop/order/hover.directive";
  import { from } from 'rxjs';

const appRoutes:Routes = [
  {path: '', component:HomeComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ShopComponent,
    OrderComponent,
    TempConverterPipe,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
