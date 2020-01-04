import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  fileToUpload: File = null;
  results=[{'ID':'001','Clinic':'Demo Clinic','Category':'Credential','Subcategory':'Payer Credential','Opened':'12-17-2019','User':'Test user','Days':'14 Days','Assignee':'Test Assignee','Status':'Pending','Pulldate':'12-17-2019','Priority':'High'},
  {'ID':'001','Clinic':'Demo Clinic','Category':'Credential','Subcategory':'Payer Credential','Opened':'12-17-2019','User':'Test user','Days':'14 Days','Assignee':'Test Assignee','Status':'Pending','Pulldate':'12-17-2019','Priority':'High'},
  {'ID':'001','Clinic':'Demo Clinic','Category':'Credential','Subcategory':'Payer Credential','Opened':'12-17-2019','User':'Test user','Days':'14 Days','Assignee':'Test Assignee','Status':'Pending','Pulldate':'12-17-2019','Priority':'High'}
];
  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      alert('I am Called From jQuery');
    });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    alert(this.fileToUpload)

}
}
