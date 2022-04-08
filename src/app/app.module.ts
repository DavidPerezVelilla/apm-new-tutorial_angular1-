import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';



//Aqui iremos agregando los componentes necesarios para nuestra App.
//En declarations agregaremos los creados por nosotros, mientras que en imports los propios de Angular
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch:'full'},

    ]),
    ProductModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
