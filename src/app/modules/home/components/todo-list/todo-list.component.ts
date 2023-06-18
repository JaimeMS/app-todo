import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  
  public taskList:Array<TaskList> = [
   { task: "Minha Nova Task", checked: true },
   { task: "Minha Nova Task 2", checked: false }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }
}
