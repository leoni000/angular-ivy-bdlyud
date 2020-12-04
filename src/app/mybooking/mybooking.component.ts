import { Component} from "@angular/core";
import { ComService } from "./../communication.service";

@Component({
selector:"mybooking",
templateUrl:"./mybooking.component.html",
styleUrls:['./mybooking.component.css']
})

export class myBookingComponent{

constructor(public com:ComService){
  
}

}