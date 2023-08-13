import { Component, OnInit } from '@angular/core';
import { HttpHandlerService } from '../shared/service/httphandler.service';

@Component({
  selector: 'app-hod-dashboard',
  templateUrl: './hod-dashboard.component.html',
  styleUrls: ['./hod-dashboard.component.css']
})
export class HodDashboardComponent implements OnInit{

// leavearray : any = [];
// leaveobj : any = [];
leaveDatalist : any=[];
constructor(private httpserve : HttpHandlerService){}

ngOnInit(): void {
  this.httpserve.getleavedata().subscribe((leaveobj : any)=>{
    this.leaveDatalist = leaveobj;
    console.log(this.leaveDatalist)
   
  })

 
}

approveLeave(leave : any ): void{
  leave.status = 'approve';
  
  console.log(this.leaveDatalist)
  
this.httpserve.updateLeaveStatus(this.leaveDatalist).subscribe((resdata :any)=>{
  console.log("data is approved",resdata)
})

}

rejectLeave(leave : any){
  leave.status = 'reject';
  console.log(leave.status)
  // if(leave){
  //   for(let data of this.leaveDatalist){
  //     if(data.status === 'pending'){
  //       data.status = 'reject';
  //       return
  //     }
  //   }
  //   console.log(this.leaveDatalist)
  // }
  
  this.httpserve.updateLeaveStatus(this.leaveDatalist).subscribe((resdata :any)=>{
    console.log("data is Rejected",resdata)
  })

}
}
