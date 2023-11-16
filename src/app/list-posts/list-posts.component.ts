import { Post } from '../models/post';
import { PostService } from './../services/post.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  postService = inject(PostService)
 
  listPosts: Post[] = []

  load: boolean = true
  errorMessage: string | null = null

  ngOnInit(): void {
      this.getAllPosts()
  }

  getAllPosts() {
    this.postService.getPosts().subscribe({
      next: (res) => {
        this.listPosts = res
        this.load = false
      },
      error: (err) => { 
        this.load = false
        if(!err.ok) {
          this.errorMessage = "Error Occured from the Server!"
        } 
        // this.errorMessage = err.message
      },
      complete: () => { console.info('Paquets are all received ! thanks a server') }
    })
  }
}
