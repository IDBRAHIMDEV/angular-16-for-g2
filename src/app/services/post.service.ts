import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // constructor(private http: HttpClient) { }
  http = inject(HttpClient)
  urlApi = "http://localhost:3001/posts"

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlApi)
  }

  persistPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.urlApi, post)
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.urlApi}/${id}`)
  }

  putPost(post: Post, id: number): Observable<Post> {
    return this.http.put<Post>(`${this.urlApi}/${id}`, post)
  }

  patchPost(post: Post, id: number): Observable<Post> {
    return this.http.patch<Post>(`${this.urlApi}/${id}`, post)
  }

  deletePost(id: number): Observable<null> {
    return this.http.delete<null>(`${this.urlApi}/${id}`)
  }
}
