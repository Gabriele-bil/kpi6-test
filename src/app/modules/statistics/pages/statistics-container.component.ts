import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { combineLatest } from 'rxjs';
import { IUser } from '../models/user.model';
import { ITodo } from '../models/todo.model';
import { IPost } from '../models/post.model';
import { createRandomHex } from '../utilities/create-random-hex';
import { JsonPlaceholderService } from '../services/json-placeholder.service';
import { IChartData } from '../models/chart-data.model';


@Component({
  selector: 'kpi-statistics-container', template: `
    <div>
      <h1 class="p-5">Statistics</h1>

      <div class="row align-items-center m-0">
        <div class="col-12 col-md-6">
          <kpi-chart [config]="todosChartConfig" [id]="'id1'"></kpi-chart>
        </div>

        <div class="col-12 col-md-6">
          <kpi-chart [config]="postsChartConfig" [id]="'id2'"></kpi-chart>
        </div>
      </div>
    </div>
  `,
})
export class StatisticsContainerComponent implements OnInit {
  public todosChartConfig: ChartConfiguration | null = null;
  public postsChartConfig: ChartConfiguration | null = null;

  constructor(private jsonPlaceholderService: JsonPlaceholderService) {
  }

  public ngOnInit(): void {
    combineLatest([
      this.jsonPlaceholderService.getUsers(),
      this.jsonPlaceholderService.getPosts(),
      this.jsonPlaceholderService.getTodos()
    ]).subscribe(([users, posts, todos]) => {
      this.todosChartConfig  = this.createConfigTodos(users, todos);
      this.postsChartConfig = this.createConfigPosts(users, posts);
    })
  }

  private calculateCompletedTodos(users: IUser[], todos: ITodo[]): IChartData[] {
    return users.map(user => ({
      name: `${ user.username } - ${ user.name }`,
      value: todos.filter(todo => todo.userId === user.id && todo.completed).length,
      color: createRandomHex()
    }));
  }

  private calculateNumberOfPosts(users: IUser[], posts: IPost[]): IChartData[] {
    return users.map(user => ({
      name: `${ user.username } - ${ user.name }`,
      value: posts.filter(post => post.userId === user.id).length,
      color: createRandomHex()
    }));
  }

  private createConfigTodos(users: IUser[], todos: ITodo[]): ChartConfiguration {
    const data = this.calculateCompletedTodos(users, todos);
    return {
      type: 'line', data: {
        labels: data.map(d => d.name), datasets: [{
          label: 'Numero Todo completati', data: data.map(d => d.value), backgroundColor: data.map(d => d.color)
        }]
      }
    }
  }

  private createConfigPosts(users: IUser[], posts: IPost[]): ChartConfiguration {
    const data = this.calculateNumberOfPosts(users, posts);
    return {
      type: 'pie', data: {
        labels: data.map(d => d.name), datasets: [{
          label: 'Numero Post', data: data.map(d => d.value), backgroundColor: data.map(d => d.color)
        }]
      }
    }
  }
}
