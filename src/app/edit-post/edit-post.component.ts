import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute)
  postService = inject(PostService)

  myPost: Post = {
    title: '',
    body: ''
  }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(res => this.getOnePost(res['id']))
  }

  getOnePost(id: number) {
    this.postService.getPost(id).subscribe(res => this.myPost = res)
  }

}
