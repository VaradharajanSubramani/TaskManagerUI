import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedService} from 'src/app/Service/shared.service';
import {Task} from 'src/app/Model/task';
import {ParentTask} from 'src/app/Model/parenttask';
import{ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item:Task;
  msg:any;  
  pitem :ParentTask;
  @ViewChild('myForm') formValues;

  constructor(private service:SharedService, private router:Router) {
    this.item= new Task();
    //this.pitem = new ParentTask();
   }

  ngOnInit() {
    this.service.GetParentTasks().subscribe(res=>
      {
        this.pitem=res;        
        console.log(this.pitem);
      });
  }

  Add()
  {    
    console.log(this.item);
    this.service.Add(this.item).subscribe(res=>
      {this.msg=res;
        this.router.navigate(['view']);
      });    
  }

  clear()
  {
    console.log("clear");
    this.formValues.resetForm();
  }

}
