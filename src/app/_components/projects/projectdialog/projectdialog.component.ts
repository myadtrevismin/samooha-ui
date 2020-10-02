import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountService } from 'src/app/_services/account.service';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';

@Component({
  templateUrl: './projectdialog.component.html',
  styleUrls: ['./projectdialog.component.scss']
})
export class ProjectdialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProjectdialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private projectservice: ProjectserviceService,
              private formBuilder: FormBuilder,
              private accountService: AccountService) { }

  subProject;
  public subplotForm: FormGroup;
  public submitted = false;
  status;
  agents;
  buttonTxt;

  ngOnInit(): void {
    this.subProject = this.data.plot.sections.filter(x => x.name === this.data.path.id.split('-')[1])[0];
    console.log(this.subProject);
    this.buttonTxt = this.subProject.agentId === null ? 'Save' : 'Update';
    this.status = this.subProject.currentStatus === 2 ? 'Sold' : this.subProject.currentStatus === 1 ? 'On Hold' : 'Open';
    this.accountService.getAll().subscribe(x => this.agents = x.filter(a => a.role === 'Agent'));
    this.subplotForm = this.formBuilder.group({
      customerName : [this.subProject.customerName, Validators.required],
      phone: [this.subProject.phone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      address : [this.subProject.address, [Validators.required, Validators.maxLength(50), Validators.minLength(3)]],
      price: [this.subProject.price, [Validators.required, Validators.maxLength(9)]],
      updateDate: [this.subProject.purchaseDate, Validators.required],
      agent : [this.subProject.agentId, Validators.required],
      plotSectionId: [this.subProject.plotSectionId, Validators.required],
      currentStatus: [this.subProject.currentStatus, Validators.required]
      });
  }

  // tslint:disable-next-line: typedef
  onNoClick(){
    this.dialogRef.close();
  }

  // tslint:disable-next-line: typedef
  onCloseDialog() {
    this.onSubmit();
  }

  // tslint:disable-next-line: typedef
  get f() { return this.subplotForm.controls; }

  // tslint:disable-next-line: typedef
  onSubmit(){
    this.submitted = true;
    console.log(this.subplotForm);
    if (this.subplotForm.valid){
      this.subplotForm.get('currentStatus').patchValue(2, {
        onlySelf: true
      });
      this.dialogRef.close(this.subplotForm.value);
    }
  }

  // tslint:disable-next-line: typedef
  changeAgent(event){
    this.subplotForm.get('agent').setValue(event.target.value, {
      onlySelf: true
    });
  }

}
