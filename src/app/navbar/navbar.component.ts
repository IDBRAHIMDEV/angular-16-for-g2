import { Component, OnInit, inject } from '@angular/core';
import { UserBehaviourService } from '../services/user-behaviour.service';
import { Router } from '@angular/router'
import { UserAndToken } from '../authentication/models/user-and-token';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userBehiviour = inject(UserBehaviourService)
  router = inject(Router)

  userToken: string | null = null
  userData: string | null = null

  ngOnInit(): void {
      this.userBehiviour.getTokenApp().subscribe((res: string | null) => {
        this.userToken = res
      })

      this.userBehiviour.userApp.subscribe((res: UserAndToken | null) => {
        this.userData = `${res?.firstName} ${res?.lastName}`
      })
  }

  logout() {
    this.userBehiviour.setTokenApp(null)
    
    localStorage.removeItem('token')
    this.router.navigateByUrl('/auth/login')
  }

}
