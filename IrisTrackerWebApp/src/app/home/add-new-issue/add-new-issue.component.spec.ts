import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewIssueComponent } from './add-new-issue.component';

describe('AddNewIssueComponent', () => {
  let component: AddNewIssueComponent;
  let fixture: ComponentFixture<AddNewIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
