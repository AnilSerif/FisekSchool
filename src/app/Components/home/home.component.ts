import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  SignUpForms:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.SignUpForms = formBuilder.group({
      VelinameSurname:["",Validators.required],
      StudentnameSurname:["",Validators.required],
      VeliEposta:["",Validators.required],
      VeliphoneName:["",Validators.required]
    })
  }
  Send(){
    console.log(this.SignUpForms.value);
    
  }












}
