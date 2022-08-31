import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homeModule = () => import('./modules/home/home.module').then(({ HomeModule }) => HomeModule);
const statisticsModule = () => import('./modules/statistics/statistics.module').then(({ StatisticsModule }) => StatisticsModule);

const routes: Routes = [
  { path: '', loadChildren: homeModule, pathMatch: 'full' },
  { path: 'statistics', loadChildren: statisticsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
