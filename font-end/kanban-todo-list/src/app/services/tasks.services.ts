import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private readonly API = '/api/tasks';

  constructor(private httpClient: HttpClient) { }

  list() {
   return this.httpClient.get<Task[]>(this.API).pipe(
    tap(tasks => {console.log(tasks)})
   )
  }

  create(task: Task){
   return this.httpClient.post<Task>(this.API, task).pipe(first());
  }

  update() {
  }

  remove() {
  }
}