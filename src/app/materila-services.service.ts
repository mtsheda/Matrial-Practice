import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaterilaServicesService {
  nameUrl: string = "https://api.agify.io?name=Mafora"
  constructor(private http:HttpClient) {}

    getName(): Observable<any>{

      return this.http.get(this.nameUrl)
    }
   }

  




