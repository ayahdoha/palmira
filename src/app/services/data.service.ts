import {Injectable} from '@angular/core';
export class Task {
  id: number = 0;
  parentId: number = 0;
  title: string = '';
  start: Date = new Date();
  end: Date = new Date();
  progress: number = 0;
}

export class Dependency {
  id: number = 0;
  predecessorId: number = 0;
  successorId: number = 0;
  type: number = 0;
}

export class Resource {
  id: number = 0;
  text: string = '';
}

export class ResourceAssignment {
  id: number = 0;
  taskId: number = 0;
  resourceId: number = 0;
}
const tasks: Task[] = [{
  'id': 1,
  'parentId': 0,
  'title': 'Software Development',
  'start': new Date('2021-02-21T05:00:00.000Z'),
  'end': new Date('2021-07-04T12:00:00.000Z'),
  'progress': 31
}, {
  'id': 2,
  'parentId': 1,
  'title': 'Scope',
  'start': new Date('2021-02-21T05:00:00.000Z'),
  'end': new Date('2021-02-26T09:00:00.000Z'),
  'progress': 60
}, {
  'id': 3,
  'parentId': 2,
  'title': 'Determine project scope',
  'start': new Date('2021-02-21T05:00:00.000Z'),
  'end': new Date('2021-02-21T09:00:00.000Z'),
  'progress': 100
}, {
  'id': 4,
  'parentId': 2,
  'title': 'Secure project sponsorship',
  'start': new Date('2021-02-21T10:00:00.000Z'),
  'end': new Date('2021-02-22T09:00:00.000Z'),
  'progress': 100
}, {
  'id': 5,
  'parentId': 2,
  'title': 'Define preliminary resources',
  'start': new Date('2021-02-22T10:00:00.000Z'),
  'end': new Date('2021-02-25T09:00:00.000Z'),
  'progress': 60
}, {
  'id': 6,
  'parentId': 2,
  'title': 'Secure core resources',
  'start': new Date('2021-02-25T10:00:00.000Z'),
  'end': new Date('2021-02-26T09:00:00.000Z'),
  'progress': 0
}];

const dependencies: Dependency[] = [{
  "id": 1,
  "predecessorId": 3,
  "successorId": 4,
  "type": 0
}, {
  "id": 2,
  "predecessorId": 4,
  "successorId": 5,
  "type": 0
}, {
  "id": 3,
  "predecessorId": 5,
  "successorId": 6,
  "type": 0
}, {
  "id": 4,
  "predecessorId": 6,
  "successorId": 7,
  "type": 0
}, {
  "id": 5,
  "predecessorId": 7,
  "successorId": 9,
  "type": 0
}, {
  "id": 6,
  "predecessorId": 9,
  "successorId": 10,
  "type": 0
}];

const resources: Resource[] = [{
  'id': 1,
  'text': 'Management'
}, {
  'id': 2,
  'text': 'Project Manager'
}, {
  'id': 3,
  'text': 'Analyst'
}, {
  'id': 4,
  'text': 'Developer'
}, {
  'id': 5,
  'text': 'Testers'
}, {
  'id': 6,
  'text': 'Trainers'
}, {
  'id': 7,
  'text': 'Technical Communicators'
}, {
  'id': 8,
  'text': 'Deployment Team'
}];

const resourceAssignments: ResourceAssignment[] =[{
  'id': 0,
  'taskId': 3,
  'resourceId': 1
}, {
  'id': 1,
  'taskId': 4,
  'resourceId': 1
}, {
  'id': 2,
  'taskId': 5,
  'resourceId': 2
}, {
  'id': 3,
  'taskId': 6,
  'resourceId': 2
}, {
  'id': 4,
  'taskId': 9,
  'resourceId': 3
}, {
  'id': 5,
  'taskId': 10,
  'resourceId': 3
}, {
  'id': 6,
  'taskId': 11,
  'resourceId': 2
}, {
  'id': 7,
  'taskId': 12,
  'resourceId': 2
}, {
  'id': 8,
  'taskId': 12,
  'resourceId': 3
}, {
  'id': 9,
  'taskId': 13,
  'resourceId': 3
}, {
  'id': 10,
  'taskId': 14,
  'resourceId': 2
}];
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {
  }
  getTasks(): Task[] {
    return tasks;
  }

  getDependencies(): Dependency[] {
    return dependencies;
  }

  getResources(): Resource[] {
    return resources;
  }

  getResourceAssignments(): ResourceAssignment[] {
    return resourceAssignments;
  }
}
