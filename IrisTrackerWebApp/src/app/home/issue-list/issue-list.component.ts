import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
//import * from jquery
declare var $:any;
@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {
  results=[{'ID':'001','Clinic':'Demo Clinic','Category':'Credential','Subcategory':'Payer Credential','Opened':'12-17-2019','User':'Test user','Days':'14 Days','Assignee':'Test Assignee','Status':'Pending','Pulldate':'12-17-2019','Priority':'High'},
  {'ID':'001','Clinic':'Demo Clinic','Category':'Credential','Subcategory':'Payer Credential','Opened':'12-17-2019','User':'Test user','Days':'14 Days','Assignee':'Test Assignee','Status':'Pending','Pulldate':'12-17-2019','Priority':'High'},
  {'ID':'001','Clinic':'Demo Clinic','Category':'Credential','Subcategory':'Payer Credential','Opened':'12-17-2019','User':'Test user','Days':'14 Days','Assignee':'Test Assignee','Status':'Pending','Pulldate':'12-17-2019','Priority':'High'}
];

length = 200;
pageSize = 10;
pageSizeOptions: number[] = [5, 10, 25, 100];
// MatPaginator Output
pageEvent: PageEvent;
states: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];
date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  closeResult: string;
  constructor(private router:Router,private modalService: NgbModal) { }

  ngOnInit() {
  }
  onPaginateChange(event:any){
    alert('hi')
  }
  OnClickIssue(events:any){
    alert('hihi')
this.router.navigate(['/Home',{outlets:{home:['IssueDetails']}}])
  }
  OnAddNewIssue(ev:any){
alert("New Issue")
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
