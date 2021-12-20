import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http'
import {Task} from '../task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    console.log("pase por aca");
    return this.http.delete<Task>(url);
  }

}
