import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logRe!:FormGroup;
  constructor() {
    
   }

  ngOnInit(): void {
    this.logRe=new FormGroup({
      'fName': new FormControl('',[Validators.required,Validators.minLength(4)]),
      'lName': new FormControl('',[Validators.required,Validators.minLength(4)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'pass': new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')])
    });
  }
  onSubmit(){
     console.log(this.logRe.value);
     console.log(this.logRe.status);
   }
   get fname():any {
    return this.logRe.get('fName');
  }
  get lname():any{
    return this.logRe.get('lName');
  }
  get email():any{
    return this.logRe.get('email');
  }
  get pass():any{
    return this.logRe.get('pass');
  }

}
