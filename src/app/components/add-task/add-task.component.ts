import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task'
import { UiService } from '../../service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  id:number = 0;
  text:string = "";
  day:number = 0;
  reminder:boolean = false;
  showAddTask:boolean =false;
  subscription?: Subscription;

    constructor(
      private uiService:UiService) {
        this.subscription = this.uiService.onToggle()
                        .subscribe((value) => {this.showAddTask = value})
       }

    ngOnInit(): void {
    }

  onSubmit(){
    if(this.text.length === 0) {
      alert("Please add a task");
    }
    this.day = new Date(this.day).valueOf();
    const {id,text,day,reminder} = this
    const newTask = {id,text,day, reminder}
    this.onAddTask.emit(newTask);
  }

}

