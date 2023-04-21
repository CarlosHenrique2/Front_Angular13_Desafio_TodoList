import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { task, prioridades } from '../../interfaces/interfaces';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  formtask!: FormGroup
  prioridades: prioridades[] = [
    {value: 'Baixa'},
    {value: 'Media'},
    {value: 'Alta'},
  ];

  constructor(  
    private taskservice: TaskService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {task: task}
    ) { 
      this.formtask = this.fb.group({
        id: [this.data.task.id, Validators.required],
        titulo: [this.data.task.titulo, Validators.required],
        descricao: [this.data.task.descricao, Validators.required],
        data: [this.data.task.data, Validators.required],
        prioridade: [this.data.task.prioridade, Validators.required]
      })
    }

  ngOnInit(): void {

  }

  public onNoClick(): void {
    this.dialogRef.close(true);
  }

  public editTask(): void {
    this.taskservice.updateTask(this.data.task.id, this.formtask.getRawValue()).subscribe({
      next: (val: any) => {
        localStorage.removeItem(String(this.data.task.id))
        this.dialogRef.close(true);
      },
      error: (err: any) => {
        console.log ()
      }
    })
  }
  
}
