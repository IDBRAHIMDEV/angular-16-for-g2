import { PostService } from './../services/post.service';
import { Component, inject } from '@angular/core';
import { Post } from '../models/post';
import { Router } from '@angular/router'
import { FormGroup, NgForm } from '@angular/forms';

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

  createPost(form: NgForm) {

    if(form.invalid) {
      alert('sir tan3ass')
      return;
    }
    
    this.postService.persistPost(form.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/blog')
      },
      error: err => console.log(err)
    })
  }

  info(data: any) {
    console.log(data)
  }

}
