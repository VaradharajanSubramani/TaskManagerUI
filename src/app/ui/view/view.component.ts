import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Service/shared.service';
import {Task} from 'src/app/Model/task';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
list: Task[];
msg:any;
  constructor(private shareservice: SharedService) { 
    this.shareservice.GetAllTasks()
  .subscribe(data=>{
    this.list = data;
    console.log(this.list)
  })
  }
  public output:object;

  ngOnInit() {
  
  
  }

  EndTask(id:number)
  {
    this.shareservice.EndTask(id).subscribe(res=>
      {
        this.msg=res;       
      });   
  }

}
