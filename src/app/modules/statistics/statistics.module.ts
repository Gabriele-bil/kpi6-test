import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsContainerComponent } from './pages/statistics-container.component';
import { ChartComponent } from './components/chart.component';
import { JsonPlaceholderService } from './services/json-placeholder.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JsonPlaceholderApiInterceptor } from '../../shared/interceptors/json-placeholder-api.interceptor';


@NgModule({
  declarations: [
    StatisticsContainerComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    StatisticsRoutingModule,
    HttpClientModule
  ],
  providers: [
    JsonPlaceholderService,
    { provide: HTTP_INTERCEPTORS, useClass: JsonPlaceholderApiInterceptor, multi: true },
  ]
})
export class StatisticsModule { }
