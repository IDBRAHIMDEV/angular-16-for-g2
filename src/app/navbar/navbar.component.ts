import { Component, OnInit, inject } from '@angular/core';
import { UserBehaviourService } from '../services/user-behaviour.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userBehiviour = inject(UserBehaviourService)
  router = inject(Router)

  userToken: string | null = null

  ngOnInit(): void {
      this.userBehiviour.getTokenApp().subscribe((res: string | null) => {
        this.userToken = res
      })
  }

  logout() {
    this.userBehiviour.setTokenApp(null)
    
    localStorage.removeItem('token')
    this.router.navigateByUrl('/auth/login')
  }

}
