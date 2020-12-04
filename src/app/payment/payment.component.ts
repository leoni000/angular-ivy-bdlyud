import { Component } from "@angular/core";
import { ComService } from "./../communication.service";
@Component({
  selector: "payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class paymentComponent {
  flag: boolean = false;
  pay: boolean = false;
  btn: boolean = true;
  constructor(public com: ComService) {
    console.log(this.com.a1);
    console.log(this.com.a2);
  }
  setflag() {
    console.log(this.flag);
    this.flag = true;
    this.pay = true;
    this.btn = false;
    console.log(this.flag);
  }
   popup() {
    alert("Logged out successfully");
  }
}
