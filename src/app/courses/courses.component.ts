import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
  list: boolean = true
  editMode: boolean = false
  showForm: boolean = false
  title: string = "Welcome to our Courses"
  image: string = "https://www.blog.brightcoding.dev/wp-content/uploads/2023/10/Exploring-Next-Auth-in-Nextjs-A-Comprehensive-Guide-Bright-Coding-Mohamed-Idbrahim.png"
  
  myCourse = {
    id: uuidv4(),
    label: ''
  }

  listCourses = [
    {id: '1', label: "Learn Angular"},
    {id: '2', label: "Learn React"},
    {id: '3', label: "Learn Vue 3"},
    {id: '4', label: "Learn Svelte"},
  ]

  changeTheImage() {
    this.image = "https://www.blog.brightcoding.dev/wp-content/uploads/2023/10/The-Impact-of-Future-Technologies-on-Our-Lives-A-Glimpse-into-Tomorrow-Bright-Coding-mohamed-idbrahim.png"
  }

  addCourse() {

    this.listCourses = [...this.listCourses, this.myCourse]
    this.initCourse()
  }

  deleteCourse(course: any) {

    Swal.fire({
      title: "Are you sure?",
      text: `To delete this course: ${course.label}`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      timer: 5000
    }).then((result) => {
      if (result.isConfirmed) {

        this.listCourses = this.listCourses.filter((currentCourse) => course.id !== currentCourse.id)
        
        Swal.fire({
          title: "Course is Deleted!",
          text: `The Course ${course.label} has been deleted.`,
          icon: "success",
          timer: 3000,
          timerProgressBar: true
        });
      }
    });

    // if(!confirm(`Are you sure to delete this Course: ${course.label}`)) {
    //   return
    // }

    // const index = this.listCourses.indexOf(course)

    // if(index >= 0) {
    //   this.listCourses.splice(index, 1)
    // }
  }

  toggleForm() {
      this.showForm = !this.showForm
  }

  editCourse(course: any) {
    this.myCourse = course
    this.editMode = true
  }

  updateCourse() {
    this.editMode = false
    this.initCourse()
  }

  textShowForm() {
    return this.showForm ? 'Hide': 'Show'
  }

  initCourse() {
    this.myCourse = {
      id: uuidv4(),
      label: ''
    }
  }

  toggleList(status: boolean) {
    this.list = status
  }
}
