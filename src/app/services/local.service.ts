import { Injectable } from '@angular/core';
import { Local } from '../interface/local';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

constructor(private http:HttpClient) { }
path="http://localhost:3000/local"



getLocal():Observable<Local[]>{
  return this.http.get<Local[]>(this.path);
}


}
