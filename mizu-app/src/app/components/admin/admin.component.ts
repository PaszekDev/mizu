import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  searchText:String="";
  isVisible:boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

  public onClick():void{   
    this.isVisible = !this.isVisible;
    this.ngOnInit();
  }

}
