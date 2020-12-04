import { Component } from "@angular/core";
import { ComService } from "./../communication.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  addf: boolean = false;
  ck: boolean = true;
  adds: boolean = false;
  removef: boolean = false;
  bookingf: boolean = false;

  name: string;
  spots: number;
  mname: string;
  mspots: number;
  address: string;
  index: number;
  available11: number;
  available12: number;
  rname: string;

  parking_slots: any = [];
  obj = {};
  constructor(public com: ComService) {
    this.copy();
  }
  copy() {
    this.parking_slots = this.com.data;
  }

  check() {
    this.obj["parking_name"] = this.name;
    this.obj["total_spots"] = this.spots;
    this.obj["address"] = this.address;
    this.obj["available11"] = this.spots;
    this.obj["available12"] = this.spots;
    this.obj["flag"] = 0;

    this.com.data.push(this.obj);
    console.log(this.com.data);
    this.ck = true;
    this.addf = false;
  }
  modify() {
    for (let order of this.com.data) {
      if (this.mname.toLowerCase() == order.parking_name.toLowerCase()) {
        this.index = this.com.data.indexOf(order);
        this.available11 =
          this.com.data[this.index].available11 +
          (this.mspots - this.com.data[this.index].total_spots);
        this.available12 =
          this.com.data[this.index].available12 +
          (this.mspots - this.com.data[this.index].total_spots);
        this.com.data[this.index].total_spots = this.mspots;
        this.com.data[this.index].available11 = this.available11;
        this.com.data[this.index].available12 = this.available12;

        break;
      }
    }
    this.ck = true;
    this.adds = false;
  }
  removeslots() {
    for (let order of this.com.data) {
      if (this.rname.toLowerCase() == order.parking_name.toLowerCase()) {
        this.com.data.splice(this.com.data.indexOf(order), 1);
        break;
      }
    }
    this.ck = true;
    this.removef = false;
  }
  popup() {
    alert("Logged out successfully");
  }
  dashboard() {
    this.ck = true;
    this.addf = false;
    this.adds = false;
    this.removef = false;
    this.bookingf = false;
  }
  add() {
    this.ck = false;
    this.addf = true;
    this.adds = false;
    this.removef = false;
    this.bookingf = false;
  }
  addslots() {
    this.ck = false;
    this.adds = true;
    this.addf = false;
    this.removef = false;
    this.bookingf = false;
  }

  removes() {
    this.addf = false;
    this.adds = false;
    this.ck = false;
    this.removef = true;
    this.bookingf = false;
  }
  booking() {
    this.addf = false;
    this.adds = false;
    this.ck = false;
    this.removef = false;
    this.bookingf = true;
  }
}
