import { UserBehaviourService } from './../../services/user-behaviour.service';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const userBehaviour = inject(UserBehaviourService)
  const router = inject(Router)

  const token: string | null = localStorage.getItem('token') 

  // if(token) {
  //   return true
  // }

  // return false

  // return token ? true : false

  // return !!token

  if(token) {
    return true
  }

  router.navigateByUrl('/auth/login')
  return false
};
