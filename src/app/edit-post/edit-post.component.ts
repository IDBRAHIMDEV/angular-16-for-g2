import { CategoryService } from './../services/category.service';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as lodash from 'lodash';
import { Category } from '../models/category';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)
  postService = inject(PostService)
  categoryService = inject(CategoryService)

  id: number | null = null
  categories: Category[] = []

  formPost: FormGroup = new FormGroup({
    title: new UntypedFormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern('[a-zA-Z0-9 ]*')]),
    body: new UntypedFormControl('', [Validators.required, Validators.minLength(10)]),
    category: new UntypedFormControl(""),
    active: new UntypedFormControl(false),
  })

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(res => {
        this.id = +res['id']
        this.getOnePost(this.id)
      })

      this.categoryService.getCategories().subscribe(res => this.categories = res)
  }

  getOnePost(id: number) {
    this.postService.getPost(id).subscribe(res => this.formPost.patchValue(lodash.pick(res, ['title', 'body']) ))
  }

  updatePost() {

   console.log(this.formPost.value)

    // if(this.formPost.invalid) {
    //   this.formPost.reset()
    //   return
    // }
  
    // const newPost: Post = {
    //   title: this.formPost.controls?.['title'].value,
    //   body: this.formPost.controls?.['body'].value
    // }

    // if(this.id) {
    //   this.postService.putPost(newPost, this.id).subscribe({
    //     next: res => {
    //       this.router.navigateByUrl('/blog')
    //     },
    //     error: err => console.log(err)
    //   })
    // }

    // console.log(this.formPost)
  }

}
