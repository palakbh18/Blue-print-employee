import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  create(employee): Observable<Employee> {
    return this.httpClient.post<Employee>(this.apiServer + '/employee/', JSON.stringify(employee), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  getById(id): Observable<Employee> {
    return this.httpClient.get<Employee>(this.apiServer + '/employee/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAll(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiServer + '/employee/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id, employee): Observable<Employee> {
    return this.httpClient.put<Employee>(this.apiServer + '/employee/' + id, JSON.stringify(employee), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id) {
    return this.httpClient.delete<Employee>(this.apiServer + '/employee/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
