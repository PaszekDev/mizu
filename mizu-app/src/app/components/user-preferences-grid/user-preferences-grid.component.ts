import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-preferences-grid',
  templateUrl: './user-preferences-grid.component.html',
  styleUrls: ['./user-preferences-grid.component.scss']
})
export class UserPreferencesGridComponent implements OnInit {

  languages: any[] = [
    {value: "English"},
    {value: "Polish"}
  ]

  dateFormats: any[] = [
    {value: "MMMM d, y, h:mm:ss a"},
    {value: "M/d/yy, h:mm a"},
    {value: "h:mm:ss a"}
  ]

  preferencesForm = new FormGroup({})

  constructor(private fb: FormBuilder) {
    this.preferencesForm= fb.group({
      language: ['English'],
      dateFormat: ['MMMM d, y, h:mm:ss a']
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {
    //TODO: implement methods
  }

}
