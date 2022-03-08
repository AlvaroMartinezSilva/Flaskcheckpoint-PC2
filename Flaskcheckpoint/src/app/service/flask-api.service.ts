import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FlaskAPIService {

  //ENDPOINT
  private sentimientosAPI = "127.0.0.1:5000/sentimiento"

  constructor(private http: HttpClient) { }

  public getAllRequest(): Observable<any>{
    return this.http.get(this.sentimientosAPI);
  }
}
