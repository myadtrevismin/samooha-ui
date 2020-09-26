import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectserviceService } from 'src/app/_services/projects/projectservice.service';

@Component({
  selector: 'app-projectdetail',
  templateUrl: './projectdetail.component.html',
  styleUrls: ['./projectdetail.component.scss']
})
export class ProjectdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private projects: ProjectserviceService) { }

  project;

  ngOnInit(): void {
   const projectId = this.route.snapshot.paramMap.get('id');
   this.projects.getProjectById(projectId).subscribe(x => this.project = x);
  }

}
