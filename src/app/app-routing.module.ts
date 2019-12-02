import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {path: 'movies', component: MoviesComponent
  // path duong dan  khi  nhap vao  trinh duyet, cho? den componet
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // khoi chay dau  tien khi chay
  exports: [RouterModule]
})
export class AppRoutingModule { }
