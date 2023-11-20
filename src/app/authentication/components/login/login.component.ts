import { UserBehaviourService } from './../../../services/user-behaviour.service';
import { Component, inject } from '@angular/core';
import { FormGroup, UntypedFormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Credential } from '../../models/credentials';
import { UserAndToken } from '../../models/user-and-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  router = inject(Router)
  authService = inject(AuthService)
  userBehaviour = inject(UserBehaviourService)

  userAndToken: UserAndToken | null = null

  loginForm = new FormGroup({
    username: new UntypedFormControl(null),
    password: new UntypedFormControl(null),
  }); 

  login() {

    const credential: Credential = {
      username: this.loginForm.controls?.['username'].value,
      password: this.loginForm.controls?.['password'].value
    }

    this.authService.signIn(credential).subscribe({
      next: (res) => {
        this.userAndToken = res
        localStorage.setItem('token', this.userAndToken.token)

        const token = res.token
        const payload = token.split('.')[1]
        const playloadData: string = atob(payload) 
        this.userBehaviour.setUserApp(JSON.parse(playloadData))
        this.userBehaviour.setTokenApp(token)
        this.router.navigateByUrl('/admin/dashboard')
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
