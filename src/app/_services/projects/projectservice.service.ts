import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/_model/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {

  constructor(private router: Router, private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getProjects() {
    return this.http.get<Project[]>(`${environment.apiUrl}/api/projects`, {
      withCredentials: true
    });
  }

  // tslint:disable-next-line: typedef
  getProjectById(id) {
    return this.http.get<Project>(`${environment.apiUrl}/api/projects/` + id, {
      withCredentials: true
    });
  }

  // tslint:disable-next-line: typedef
  saveProject(project){
    return this.http.post(`${environment.apiUrl}/api/projects`, project, {
      withCredentials: true
    });
  }

  // tslint:disable-next-line: typedef
  updateProject(project){
    return this.http.put(`${environment.apiUrl}/api/projects/update`, project, {
      withCredentials: true,
      params: new HttpParams().append('id', project.plotId)
    });
  }

    // tslint:disable-next-line: typedef
    deleteProject(projectId){
      return this.http.delete(`${environment.apiUrl}/api/projects`, {
        withCredentials: true,
        params: new HttpParams().append('id', projectId)
      });
    }

  // tslint:disable-next-line: typedef
  getsubProjects(id, name){
    let params = new HttpParams();
    params = params.append('plotId', id);
    params = params.append('name', name);
    return this.http.get<Project[]>(`${environment.apiUrl}/api/projects/subproject`, {
      withCredentials: true,
      params
    });
  }

  // tslint:disable-next-line: typedef
  savePlotDetails(plot){
    return this.http.post(`${environment.apiUrl}/api/projects/customer/save`, plot, {
      withCredentials: true
    });
  }

}
