import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title: string = "Welcome to our Courses"
  image: string = "https://www.blog.brightcoding.dev/wp-content/uploads/2023/10/Exploring-Next-Auth-in-Nextjs-A-Comprehensive-Guide-Bright-Coding-Mohamed-Idbrahim.png"
  
  listCourses = [
    {id: 1, label: "Learn Angular"},
    {id: 2, label: "Learn React"},
    {id: 3, label: "Learn Vue 3"},
    {id: 4, label: "Learn Svelte"},
  ]

  changeTheImage() {
    this.image = "https://www.blog.brightcoding.dev/wp-content/uploads/2023/10/The-Impact-of-Future-Technologies-on-Our-Lives-A-Glimpse-into-Tomorrow-Bright-Coding-mohamed-idbrahim.png"
  }
}
