import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {Movie} from './models/movie';

const routes: Routes = [
  {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'movies', component: MoviesComponent
  // path duong dan  khi  nhap vao  trinh duyet, cho? den componet
   },
  {path: 'dashboard', component: DashboardComponent
  },
  {path: 'detail/:id', component: MovieDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // khoi chay dau  tien khi chay
  exports: [RouterModule]
})
export class AppRoutingModule { }
