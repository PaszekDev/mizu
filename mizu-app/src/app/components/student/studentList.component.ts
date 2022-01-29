import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/models/user-dto.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './studentList.component.html',
  styleUrls: ['./studentList.component.scss']
})
export class StudentListComponent implements OnInit {

  students!:UserDTO[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllByUserGroup("student").subscribe(data=> {
      this.students=data;
      console.log(this.students);   
    });
  }

}
