import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>To-do list for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="priorityColor(currentTask)" (click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="editTask()">Edit this task</button></li>
    </ul>
    <hr>
    <div>
    <h3>{{selectedTask.description}}</h3>
    <p>Task complete? {{selectedTask.done}}</p>
    <h3> Edit task </h3>
    <label> Enter task description </label>
    <input [(ngModel)]="selectedTask.description">
    <label> Enter task priority (1-3) </label>
    <br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low priority)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium priority)<br>
    <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High priority)<br>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course',2),
    new Task('Begin brainstorming possible JavaScript group projects',3),
    new Task('Add README file to last few Angular repos on GitHub',1)
  ];

  selectedTask: Task = this.tasks[0];

  editTask() {
    alert ("Would you like to edit this task?");
  }

  isDone(clickedTask: Task) {
    if (clickedTask.done === true) {
      alert("This task has been completed");
    } else {
      alert("This task is still outstanding");
    }
  }
  priorityColor(currentTask) {
    if (currentTask.priority === 3) {
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    }else {
      return "bg-info";
    }
  }

}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
