import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ITask } from '../models/iTask';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {


  toDoForm!: FormGroup;
  toDo: ITask [] = [];
  inProgress: ITask [] = [];
  done: ITask [] = [];
  updateId: any = 0;
  isEditing: boolean = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.toDoForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', ],
      priority: ['',],
      status: ['', ],
      done: ['', ]
    })
  }

  createTask(){
    debugger;
    if(this.toDoForm.value.description == "" || this.toDoForm.value.description == null){
      this.toDoForm.controls['description'].setValue('No Description.')
    }
    if(this.toDoForm.value.priority == "" || this.toDoForm.value.priority == null){
      this.toDoForm.controls['priority'].setValue('LOW')
    }
    this.toDo.push({
      name: this.toDoForm.value.name,
      description: this.toDoForm.value.description,
      status: this.toDoForm.value.status,
      priority: this.toDoForm.value.priority,
      done: this.toDoForm.value.done
    })
    this.toDoForm.reset();
    this.toDoForm.clearValidators();
  }

  editTask(item: ITask, i: number){
    this.toDoForm.controls['name'].setValue(item.name);
    this.toDoForm.controls['description'].setValue(item.description);
    this.toDoForm.controls['priority'].setValue(item.priority);
    this.updateId = i;
    this.isEditing = true;
  }

  saveTask(){
    if(this.toDoForm.value.description == "" || this.toDoForm.value.description == null){
      this.toDoForm.controls['description'].setValue('No Description.')
    }
    if(this.toDoForm.value.priority == "" || this.toDoForm.value.priority == null){
      this.toDoForm.controls['priority'].setValue('LOW')
    }
    this.toDo[this.updateId].name = this.toDoForm.value.name;
    this.toDo[this.updateId].description = this.toDoForm.value.description;
    this.toDo[this.updateId].priority = this.toDoForm.value.priority;
    this.toDoForm.reset();
    this.toDoForm.clearValidators();
    this.updateId = undefined;
    this.isEditing = false;

  }

  deleteToDo(i: number){
    this.toDo.splice(i,1)
  }

  deleteInProgress(i: number){
    this.inProgress.splice(i,1)
  }

  deleteDone(i: number){
    this.done.splice(i,1)
  }


  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
        );
        if(event.container.id == 'cdk-drop-list-0'){
          this.toDoForm.controls['status'].setValue('TODO');
        }else if(event.container.id == 'cdk-drop-list-1'){
          this.toDoForm.controls['status'].setValue('INPROGRESS');
        }else{
          this.toDoForm.controls['status'].setValue('DONE');
          this.toDoForm.controls['done'].setValue(true);
        }
    }
  }

}
