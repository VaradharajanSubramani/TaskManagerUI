import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Task} from '../Model/task'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
url:string='http://localhost:52940/api/task/'

  constructor(private http:HttpClient) { }

  GetAllTasks():Observable<any>
  {
    return this.http.get(this.url+"GetTasks").pipe(map((res:Response)=>res))
  }

  Add(item:Task):Observable<any>
  {
    console.log("Service");
    console.log(item);
    return this.http.post(this.url+"SaveTask",item).pipe(map((res:Response)=>res))
  }

  GetTaskDetails(id:number):Observable<any>
  {
    return this.http.get(this.url+"GetTaskDetails?id="+id).pipe(map((res:Response)=> res))
  }

  Update(item:Task):Observable<any>
  {
    return this.http.put(this.url+"UpdateTask",item).pipe(map((res:Response)=> res))
  }

  GetParentTasks():Observable<any>
  {
    return this.http.get(this.url+"GetParentTasks").pipe(map((res:Response)=>res))
  }

  EndTask(id:number):Observable<any>
  {
    return this.http.put(this.url+"EndTask",id).pipe(map((res:Response)=> res))
  }

}
