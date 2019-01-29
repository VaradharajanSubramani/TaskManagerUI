import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import {SharedService} from 'src/app/Service/shared.service';
import {Task} from 'src/app/Model/task';
import {DatePipe} from '@angular/common';
import {ParentTask} from 'src/app/Model/parenttask';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [DatePipe]
})
export class UpdateComponent implements OnInit {
  item:Task;
  pitem:ParentTask;
  constructor(private shareService:SharedService, 
    private route:ActivatedRoute, public datePipe : DatePipe, private router:Router) 
    { this.item= new Task() };

  ngOnInit() {   

    this.route.params.subscribe(parms =>{
    this.shareService.GetTaskDetails(parms['id']).subscribe(res=>{
      this.item=res
      console.log(this.item);
      if(this.item != null)
      {       
        this.item.StartDate = new Date(this.item.StartDate);
        this.item.EndDate = new Date(this.item.EndDate);        
      }
    });
    });
    this.shareService.GetParentTasks().subscribe(res=>
      {
        this.pitem=res;     
      });
   
  }

  Update()
  {    
    this.shareService.Update(this.item).subscribe(res=>
      {
        this.item = res;
        this.router.navigate(['view']);
      });
   
  }

}
