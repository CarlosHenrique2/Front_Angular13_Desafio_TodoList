import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { task, tasks } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl: string = environment.local

  constructor(private http: HttpClient) { }

  public getAllTaks(): Observable<tasks[]> {
    return this.http.get<tasks[]>(`${this.baseUrl}`)
  }

  public creatTask(task: task): Observable<task> {
    return this.http.post<task>(`${this.baseUrl}`, task)
  }
 
  public updateTask(id: number, task: task): Observable<task> {
    const url = `${this.baseUrl}/${id}`
    return this.http.put<task>(url, task)
  }
 
  public deletTask(id: number): Observable<task> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<task>(url)
  }
 
}
