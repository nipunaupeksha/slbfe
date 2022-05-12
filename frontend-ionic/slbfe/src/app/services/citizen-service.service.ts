import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from '../Citizen';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CitizenServiceService {
  private apiUrl: string = 'http://localhost:8080/citizens';

  constructor(private http: HttpClient) {}

  getCitizens():Observable<Citizen[]>{
    return this.http.get<Citizen[]>(this.apiUrl);
  }

  getCitizen(citizen:Citizen):Observable<Citizen>{
    return this.http.get<Citizen>(`${this.apiUrl}/${citizen.nic.nicId}`)
  }

  deleteCitizen(citizen: Citizen):Observable<Citizen>{
    const url = `${this.apiUrl}/${citizen.nic.nicId}`;
    return this.http.delete<Citizen>(url);
  }

  updateCitizen(citizen: Citizen): Observable<Citizen> {
    const url = `${this.apiUrl}/${citizen.nic.nicId}`;
    return this.http.put<Citizen>(url, citizen, httpOptions);
  }

  addCitizen(citizen: Citizen): Observable<Citizen> {
    return this.http.post<Citizen>(this.apiUrl, citizen, httpOptions);
  }

  getContacts(citizen: Citizen):Observable<Citizen>{
    return this.http.get<Citizen>(`${this.apiUrl}/${citizen.nic.nicId}/contacts`)
  }

}
