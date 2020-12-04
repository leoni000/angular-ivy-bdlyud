import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "adminlogin",
  templateUrl: "./adminlogin.component.html",
  styleUrls: ["./adminlogin.component.css"]
})
export class adminloginComponent {
  loginForm: any;
  constructor() {
    this.loadForm();
  }
  loadForm() {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      id: new FormControl("", [Validators.required]),

      pass: new FormControl("", [Validators.required])
    });
  }
 
  ckpass() {
      if (this.loginForm.get("name").value != "admin") {
      alert("Invalid name");
      this.loginForm.setValue({ name: "", pass: "", id: "" });
    }
     else if (this.loginForm.get("pass").value != "1234") {
      alert("Invalid password");
      this.loginForm.setValue({ name: "", pass: "", id: "" });
    }
     else if (this.loginForm.get("id").value != "8080") {
      alert("Invalid id");
      this.loginForm.setValue({ name: "", pass: "", id: "" });
    }
  }
 
}
