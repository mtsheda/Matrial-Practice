import { Component } from '@angular/core';
import { MaterilaServicesService } from '../materila-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showMyName: string = "";
  constructor(private materilaServices: MaterilaServicesService){}

  getMyName(){

    this.materilaServices.getName().subscribe((surname:any) =>{
      this.showMyName = surname.name;
      console.log(this.showMyName)
    });
  }
}
