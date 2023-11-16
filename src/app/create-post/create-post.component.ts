import { PostService } from './../services/post.service';
import { Component, inject } from '@angular/core';
import { Post } from '../models/post';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

  postService = inject(PostService)
  router = inject(Router)

  myPost: Post = {
    title: '',
    body: ''
  }

  createPost() {
    this.postService.persistPost(this.myPost).subscribe({
      next: res => {
        this.router.navigateByUrl('/blog')
      },
      error: err => console.log(err)
    })
  }
}
