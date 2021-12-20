import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../task'
import {TASKS} from '../../mock-task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  @Input() task:Task = TASKS[0];
  @Output() OnDeleteTask:EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:Task) {
    console.log("ayuda")
    this.OnDeleteTask.emit(task);
  }
}
