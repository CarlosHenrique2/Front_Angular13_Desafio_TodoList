import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeTodoComponent } from './home-todo/home-todo.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskService } from './task.service';
import { SharedModule } from 'src/shared/shared.module';
import { ListTaskComponent } from './list-task/list-task.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeTodoComponent,
    EditTaskComponent,
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  exports: [
    HomeTodoComponent, 
    EditTaskComponent, 
    ListTaskComponent
  ]
})
export class ComponentModule { }
