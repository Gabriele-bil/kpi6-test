import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user.model';
import { Observable } from 'rxjs';
import { ITodo } from '../models/todo.model';
import { IPost } from '../models/post.model';

@Injectable()
export class JsonPlaceholderService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`users`);
  }

  public getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`posts`);
  }

  public getTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`todos`);
  }
}
