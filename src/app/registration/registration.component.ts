
import{ Component} from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: 'registration',
  templateUrl : 'registration.component.html', 
  styleUrls : ['registration.component.css']
 
})

export class registrationComponent{
   registration: any;
  constructor() {
    this.loadForm();
  }
  loadForm() {
    this.registration = new FormGroup({
      name: new FormControl("", [Validators.required]),
      pass: new FormControl("", [Validators.required]),
       mobile: new FormControl("", [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        email: new FormControl("", [Validators.required,Validators.email])
    });
  }
}