import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../models/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  http = inject(HttpClient)

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3001/categories") 
  }
}
