import { Component, OnInit } from '@angular/core';
import {DataService, Dependency, Resource, ResourceAssignment, Task} from "../../../services/data.service";

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {
  tasks: Task[] = new Array<Task>();
  dependencies: Dependency[] = new Array<Dependency>();
  resources: Resource[] = new Array<Resource>();
  resourceAssignments: ResourceAssignment[] =  new Array<ResourceAssignment>();

  constructor(public service: DataService) {
    this.tasks = service.getTasks();
    this.dependencies = service.getDependencies();
    this.resources = service.getResources();
    this.resourceAssignments = service.getResourceAssignments();
    this.service.showProjectHeader = true;
  }

  ngOnInit(): void {

  }

}
