import { Component } from "@angular/core";
import { ComService } from "./../communication.service";

@Component({
  selector: "booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class bookingComponent {
  customer_name: string = "";
  customer_mobile: number;
  customer_vechicle: string = "";
  customer_email: string = "";
  ck1: boolean;
  ck2: boolean;
  bookck:boolean =true;
  bookingck:boolean=false;


  amount: number;
  book: any = [];
  mySelect: string;
  available: number;
  index: number = 9;
  constructor(public com: ComService) {
    this.copy();
  }
  copy() {
    this.book = this.com.slot;
    this.book["customer_name"] = this.customer_name;
  }

  populate(ck1, ck2) {
    this.com.rcustomer_name = this.customer_name;
    this.com.rcustomer_vechicle = this.customer_vechicle;
    this.com.rparking_name = this.mySelect;
    this.com.rparkingslot = this.available;

    if ((this.ck1)&& (this.ck2)) {
      this.amount = 300;
      this.com.rparkingtime = "11am to 1pm";
      this.com.a1 = this.com.a2 = true;
      for (let order of this.com.data) {
        if (this.mySelect == order.parking_name) {
          this.available = order.total_spots - order.available11;
        }
      }
    } else if (this.ck1) {
      this.amount = 150;
      this.com.rparkingtime = "11am to 12pm";
      this.com.a1 = true;
      for (let order of this.com.data) {
        if (this.mySelect == order.parking_name) {
          this.available = order.total_spots - order.available11;
        }
      }
    } else if (!(this.ck1)&& !(this.ck2)) {
      this.amount = 0;
      this.com.rparkingtime = "";
      this.com.a2 = this.com.a1 = false;
    } else {
      this.amount = 150;
      this.com.rparkingtime = "12pm to 1am";
      this.com.a2 = true;
      for (let order of this.com.data) {
        if (this.mySelect == order.parking_name) {
          this.available = order.total_spots - order.available12;
        }
      }
    }
    this.com.ramount = this.amount;
  }
  selectChange() {
    if (this.ck1 == this.ck2) {
      for (let order of this.com.data) {
        if (this.mySelect == order.parking_name) {
          this.available = order.total_spots - order.available11;
        }
      }
    } else if (this.ck1) {
      for (let order of this.com.data) {
        if (this.mySelect == order.parking_name) {
          this.available = order.total_spots - order.available11;
        }
      }
    } else {
      for (let order of this.com.data) {
        if (this.mySelect == order.parking_name) {
          this.available = order.total_spots - order.available12;
        }
      }
    }
  }
  popup() {
    alert("Logged out successfully");
  }
  
}
