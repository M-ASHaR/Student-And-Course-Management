import { Component } from '@angular/core';
import { DeletecourseService } from 'src/app/services/deletecourse.service';
@Component({
  selector: 'app-deletecourse',
  templateUrl: './deletecourse.component.html',
  styleUrls: ['./deletecourse.component.css']
})
export class DeletecourseComponent {
  constructor (private DeletecourseService:DeletecourseService){}



  DeleteCourse(courseID:string)
  {
    const del = parseInt(courseID);
    this.DeletecourseService.DeleteCourse(del).subscribe({

    })

  }

}
