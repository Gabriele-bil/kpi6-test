import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { combineLatest } from 'rxjs';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { StatisticsContainerService } from './statistics-container.service';

@Component({
  selector: 'kpi-statistics-container', template: `
    <div>
      <h1 class="p-5">Statistics</h1>

      <div class="row align-items-center m-0">
        <div class="col-12 col-md-6">
          <kpi-chart [config]="todosChartConfigLine" [id]="'id1'"></kpi-chart>
        </div>

        <div class="col-12 col-md-6">
          <kpi-chart [config]="postsChartConfigPie" [id]="'id2'"></kpi-chart>
        </div>

        <div class="col-12 col-md-6">
          <kpi-chart [config]="todosChartConfigDoughnut" [id]="'id3'"></kpi-chart>
        </div>

        <div class="col-12 col-md-6">
          <kpi-chart [config]="postsChartConfigRadar" [id]="'id4'"></kpi-chart>
        </div>
      </div>
    </div>
  `,
  providers: [StatisticsContainerService]
})
export class StatisticsContainerComponent implements OnInit {
  public todosChartConfigLine: ChartConfiguration | null = null;
  public todosChartConfigDoughnut: ChartConfiguration | null = null;
  public postsChartConfigPie: ChartConfiguration | null = null;
  public postsChartConfigRadar: ChartConfiguration | null = null;

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private statisticsContainerService: StatisticsContainerService
  ) {}

  public ngOnInit(): void {
    combineLatest([
      this.jsonPlaceholderService.getUsers(),
      this.jsonPlaceholderService.getPosts(),
      this.jsonPlaceholderService.getTodos()
    ]).subscribe(([users, posts, todos]) => {
      this.todosChartConfigLine = this.statisticsContainerService.createConfigTodos('line', users, todos);
      this.postsChartConfigPie = this.statisticsContainerService.createConfigPosts('pie', users, posts);
      this.todosChartConfigDoughnut = this.statisticsContainerService.createConfigTodos('doughnut', users, todos);
      this.postsChartConfigRadar = this.statisticsContainerService.createConfigPosts('radar', users, posts);
    })
  }
}
