import { Injectable } from "@angular/core";

@Injectable()
export class ComService {
  public slot = [];
  public a1: boolean = false;
  public a2: boolean = false;
  public rcustomer_name: string = "";
  public rcustomer_vechicle: string = "";
  public rparking_name: string = "";
  public rparkingslot: number;

  public rparkingtime: string = "";
  public ramount: number;

  public data: any = [
    {
      parking_name: "KV Nagar",
      total_spots: 8,
      address:"Crosscut road,Gandhipuram",
      available11: 8,
      available12: 6,
      flag: 0
    },
    {
      parking_name: "North Car Street",
      total_spots: 11,
       address:"Crosscut road,Gandhipuram",
      available11: 6,
      available12: 10,
      flag: 0
    },

    {
      parking_name: "Balaji Street",
      total_spots: 8,
       address:"Crosscut road,Gandhipuram",
      available11: 4,
      available12: 6,
      flag: 0
    },

    {
      parking_name: "JB Street",
      total_spots: 10,
       address:"Crosscut road,Gandhipuram",
      available11: 8,
      available12: 6,
      flag: 0
    }
  ];
}
