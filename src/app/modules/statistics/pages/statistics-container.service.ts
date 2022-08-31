import { Injectable } from '@angular/core';
import { IUser } from '../models/user.model';
import { ITodo } from '../models/todo.model';
import { IChartData } from '../models/chart-data.model';
import { createRandomHex } from '../utilities/create-random-hex';
import { IPost } from '../models/post.model';
import { ChartConfiguration, ChartType } from 'chart.js';

@Injectable()
export class StatisticsContainerService {

  public createConfigTodos(type: ChartType, users: IUser[], todos: ITodo[]): ChartConfiguration {
    const data = this.calculateCompletedTodos(users, todos);
    return this.createConfig(type, data, 'Todo Completati')
  }

  public createConfigPosts(type: ChartType, users: IUser[], posts: IPost[]): ChartConfiguration {
    const data = this.calculateNumberOfPosts(users, posts);
    return this.createConfig(type, data, 'Numero Post');
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

  private createConfig(type: ChartType, data: IChartData[], label: string): ChartConfiguration {
    return {
      type,
      data: {
        labels: data.map(d => d.name),
        datasets: [{ label, data: data.map(d => d.value), backgroundColor: data.map(d => d.color) }]
      }
    }
  }
}
