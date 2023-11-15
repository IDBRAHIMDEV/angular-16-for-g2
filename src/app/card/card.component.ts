import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input({required: true}) course: any = null

  @Output() deleteCourseFromChild = new EventEmitter()

  destroyCourse() {
    this.deleteCourseFromChild.emit(this.course)
  }

}
