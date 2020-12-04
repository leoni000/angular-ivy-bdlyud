import { Component } from "@angular/core";
import { ComService } from "./../communication.service";
@Component({
  selector: "login",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"]
})
export class reportComponent {
  public customer_name: string = "";
  public customer_vechicle: string = "";
  public parking_name: string = "";
  public parkingslot: number;

  public parkingtime: string = "";
  public amount: number;
  index: number;
  available: number;

  constructor(public com: ComService) {
    this.copy();
  }
  copy() {
    this.amount = this.com.ramount;
    this.customer_name = this.com.rcustomer_name;
    this.customer_vechicle = this.com.rcustomer_vechicle;
    this.parking_name = this.com.rparking_name;
    this.parkingtime = this.com.rparkingtime;
    this.parkingslot = this.com.rparkingslot;
  }
  modify() {
    for (let order of this.com.data) {
      if (this.parking_name == order.parking_name) {
        this.index = this.com.data.indexOf(order);
        if (this.com.a1 == this.com.a2) {
          this.com.data[this.index].available11 =
            this.com.data[this.index].available11 - 1;
          this.com.data[this.index].available12 =
            this.com.data[this.index].available12 - 1;
          this.com.a1 = this.com.a2 = false;
        } else if (this.com.a1) {
          this.com.data[this.index].available11 =
            this.com.data[this.index].available11 - 1;
          this.com.a1 = false;
        } else {
          this.com.data[this.index].available12 =
            this.com.data[this.index].available12 - 1;
          this.com.a2 = false;
        }

        break;
      }
    }
  }
   popup() {
    alert("Logged out successfully");
  }
}
