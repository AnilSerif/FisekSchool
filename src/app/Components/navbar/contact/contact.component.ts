import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  


  ContactForms:FormGroup;
  constructor(private formBuilder:FormBuilder){
    this.ContactForms = formBuilder.group({
      Name:["",Validators.required],
      Surname:["",Validators.required],
      Email:["",Validators.required],
      Comment:["",Validators.required]
    })
  }
  Send(){
    console.log(this.ContactForms.value);
    
  }




  ngOnInit() {
  }

}
