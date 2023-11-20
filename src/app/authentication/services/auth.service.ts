import { UserAndToken } from './../models/user-and-token';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Credential } from '../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)
  apiUrl = "https://dummyjson.com/auth/login"

  signIn(credential: Credential): Observable<UserAndToken> {
    return this.http.post<UserAndToken>(this.apiUrl, {
      ...credential,
      expiresInMins: 1
    })
  }
}
