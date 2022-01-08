import { Injectable } from '@angular/core';
import { Iuser, IuserLogin } from '../../core/models/iuser';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public endpoint: string = 'http://localhost:5000/api';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: Object = {}; //Aquí almacenaremos la respuesta del login (token + id + expires)

constructor(private http: HttpClient, public router: Router) {/* Empty */}

public register(user: Iuser) {

  return this.http.post( `${this.endpoint}/register`, user).pipe(
    catchError(this.handleError)
  )
}

public login(userLogin: IuserLogin ){
  return this.http.post<any>(`${this.endpoint}/login`, userLogin).subscribe((res) => {
    localStorage.setItem('access_token', res.token)
    this.currentUser = res;
    this.router.navigate(['']);
  });
}

public getToken(){
  return localStorage.getItem('access_token');
}

public doLogout() {
  let removeToken = localStorage.removeItem('access_token');
  if(removeToken == null) {
    this.router.navigate(['']);
  }
}

get isLoggedIn(): boolean {
  let authToken = localStorage.getItem('access_token');
  return (authToken !== null) ? true : false;
 
}


  // Error 
  private handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }
}

