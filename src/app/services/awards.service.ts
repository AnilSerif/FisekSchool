import { Injectable } from '@angular/core';
import { Awards } from '../interface/awards';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
path="http://localhost:3000/awards"
constructor(
  private http:HttpClient
) { }
  
  getAwards():Observable<Awards[]>{
   return this.http.get<Awards[]>(this.path);
  
  }
  


}
