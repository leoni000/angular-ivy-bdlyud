import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { loginComponent } from "./login/login.component";
import { registrationComponent } from "./registration/registration.component";
import { bookingComponent } from "./booking/booking.component";
import { paymentComponent } from "./payment/payment.component";
import { reportComponent } from "./report/report.component";
import { myBookingComponent } from "./mybooking/mybooking.component";

import { adminloginComponent } from "./adminlogin/adminlogin.component";

import { ComService } from "./communication.service";

const appRoutes: Routes = [
  { path: "login", component: loginComponent },
  { path: "home", component: HomeComponent },
  { path: "registration", component: registrationComponent },
  { path: "booking", component: bookingComponent },
  { path: "payment", component: paymentComponent },
  { path: "report", component: reportComponent },
  { path: "mybooking", component: myBookingComponent },
  { path: "adminlogin", component: adminloginComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    loginComponent,
    registrationComponent,
    bookingComponent,
    paymentComponent,
    reportComponent,
    adminloginComponent,
    myBookingComponent
  ],
  bootstrap: [AppComponent],
  providers: [ComService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
