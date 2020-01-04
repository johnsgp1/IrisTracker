import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-add-new-issue',
  templateUrl: './add-new-issue.component.html',
  styleUrls: ['./add-new-issue.component.css']
})
export class AddNewIssueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(formData:Form){
    alert(formData)
  }
}
