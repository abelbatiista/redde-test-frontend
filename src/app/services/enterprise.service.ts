import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enterprise } from '../models/enterprise.model';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {

  private base_url: string = environment.base_url;

  public constructor(
    private _http: HttpClient
  ) { }

  public getAll(): Observable<Enterprise[]> {
    return this._http.get<Enterprise[]>(`${this.base_url}/Enterprises`);
  }
  
  public findById(id: number): Observable<Enterprise> {
    return this._http.get<Enterprise>(`${this.base_url}/Enterprises/${id}`);
  }

  public insert(enterprise: Enterprise): Observable<any> {
    return this._http.post<any>(`${this.base_url}/Enterprises`, enterprise);
  }

  public update(enterprise: Enterprise): Observable<any> {
    return this._http.put<any>(`${this.base_url}/Enterprises`, enterprise);
  }

  public delete(id: number): Observable<any> {
    return this._http.delete<any>(`${this.base_url}/Enterprises/${id}`);
  }

}
