import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './Inicial/Inicial.component';
import { FilmesComponent } from './Filmes/Filmes.component';

@NgModule({
  declarations: [		
    AppComponent,
      InicialComponent,
      FilmesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
