import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHandlerService } from '../shared/service/httphandler.service';

@Component({
  selector: 'app-person-registration',
  templateUrl: './person-registration.component.html',
  styleUrls: ['./person-registration.component.css']
})
export class PersonRegistrationComponent implements OnInit {
  
  
  personFormobj : FormGroup | any = [] ;
  
constructor(private httpserve : HttpHandlerService){}
  ngOnInit(): void {
    const generateUuid = (): string => {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
          const random = (Math.random() * 16) | 0;
          const value = character === "x" ? random : (random & 0x3) | 0x8;
  
          return value.toString(16);
      });
  };

    this.personFormobj = new FormGroup({
      id : new FormControl(generateUuid()),
      role : new FormControl(''),
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      contact : new FormControl(''),
      department : new FormControl(''),
      userName : new FormControl(''),
      password : new FormControl(''),
    })



  }


  onSubmit(){
    console.log(this.personFormobj.value)

    this.httpserve.postPerson(this.personFormobj.value).subscribe((resdata : any)=>{
      console.log(resdata)
    })
    
    this.personFormobj.reset();
  }

}
