import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserBehaviourService {

  token: string | null = localStorage.getItem('token')
  tokenApp = new BehaviorSubject<string | null>(this.token)

  getTokenApp(): Observable<string | null> {
    return this.tokenApp
  }
  setTokenApp(data: string | null) {
    this.tokenApp.next(data)
  }
}
