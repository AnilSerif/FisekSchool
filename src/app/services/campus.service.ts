import { Injectable } from '@angular/core';
import { Campus } from '../interface/campus';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CampusService {

constructor(private http:HttpClient) { }
path="http://localhost:3000/campus";

getCampus():Observable<Campus[]>{
  return this.http.get<Campus[]>(this.path);
}




}
