import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmesComponent } from './Filmes/Filmes.component';
import { InicialComponent } from './Inicial/Inicial.component';

const routes: Routes = [
  {path: 'filmes', component: FilmesComponent},
  {path: '', component: InicialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
