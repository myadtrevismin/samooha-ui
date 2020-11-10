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
    const nameclass = this.data.path.id.split('-')[1];
    this.subProject = this.data.plot.sections.filter(x => x.name === nameclass)[0];
    this.buttonTxt = this.subProject.agentId === null ? 'Save' : 'Update';
    this.status = this.subProject.currentStatus === 2 ? 'Sold' : this.subProject.currentStatus === 1 ? 'On Hold' : 'Open';
    this.accountService.getAll().subscribe(x => this.agents = x.filter(a => a.role === 'Agent'));
    this.subplotForm = this.formBuilder.group({
      customerName : [this.subProject.customerName, Validators.required],
      phone: [this.subProject.phone, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      phone2: [this.subProject.phone2],
      address : [this.subProject.address, [Validators.required, Validators.maxLength(255), Validators.minLength(3)]],
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
    if (this.subplotForm.valid){
      const plot = {
        address: this.f.address.value,
        agent: this.f.agent.value,
        currentStatus: 2,
        customerName: this.f.customerName.value,
        phone: this.f.phone.value,
        phone2: this.f.phone2.value,
        plotSectionId: this.f.plotSectionId.value,
        price: this.f.price.value,
        updateDate: this.f.updateDate.value
      };
      this.dialogRef.close(plot);
    }
  }

  // tslint:disable-next-line: typedef
  reset(){
    this.submitted = true;
    const plot = {
        address: '',
        agent: '',
        currentStatus: 0,
        customerName: '',
        phone: '',
        phone2: '',
        plotSectionId: this.f.plotSectionId.value,
        price: '',
        updateDate: this.f.updateDate.value
      };
    this.dialogRef.close(plot);
  }

  // tslint:disable-next-line: typedef
  changeAgent(event){
    console.log(event.target.value);
    this.subplotForm.get('agent').setValue(event.target.value, {
      onlySelf: true
    });
  }

}
