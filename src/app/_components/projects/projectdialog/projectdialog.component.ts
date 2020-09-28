import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';

@Component({
  templateUrl: './projectdialog.component.html',
  styleUrls: ['./projectdialog.component.scss']
})
export class ProjectdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectservice: ProjectserviceService,
              private formBuilder: FormBuilder) { }

  subProject;
  public subplotForm: FormGroup;
  public submitted = false;

  ngOnInit(): void {
    this.subProject = this.data.plot.sections.filter(x => x.name === this.data.path.id.split('-')[1])[0];
    this.subplotForm = this.formBuilder.group({
      name : [this.subProject.name, Validators.required],
      location : [this.subProject.location, Validators.required],
      size : [this.subProject.category1 + '-' + this.subProject.category2, Validators.required],
      status : [this.subProject.currentStatus === 2 ? 'Sold' : 'Open', Validators.required],
      });
  }

  // tslint:disable-next-line: typedef
  onNoClick(){
    this.dialogRef.close();
  }

  // tslint:disable-next-line: typedef
  onSubmit(){

  }

}
