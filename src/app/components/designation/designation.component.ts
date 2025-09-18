import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { APIResponseModel, IDesignation } from '../model/interface/role';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

designationList:IDesignation[]=[];
masterservice=inject(MasterService);

ngOnInit(): void {
    this.masterservice.getDesignations().subscribe((result:APIResponseModel)=>{
    this.designationList=result.data;
  },error=>{
    alert("Error / network down")
  })
}


  
  

}
