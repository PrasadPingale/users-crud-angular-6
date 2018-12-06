import { Component, OnInit } from "@angular/core";
import { NgForm, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../../Model/user.model";
import { UserService } from "../../services/user.service";
import { GrowlAlertService } from "../../services/growl-alert.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"],
})
export class AddComponent implements OnInit {
  user: User = new User();
  isClicked: Boolean = false;
  isEditpage: Boolean = false;
  emailPattern = "^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";
  phonePattern = "^[0-9+]*$";
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private growlAlertService: GrowlAlertService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params);
    if (this.router.url.indexOf("/edit-user") !== -1) {
      this.isEditpage = true;
      this.getUserDetails(this.activatedRoute.snapshot.params.id);
    }
  }

  addUser(form) {
    this.isClicked = true;
    if (form.valid) {
      this.spinnerService.show();
      this.user.status = this.user.status === "Active" ? true : false;
      this.userService.addUser(this.user).subscribe(response => {
        this.growlAlertService.showSuccess("User Added Successfully");
        this.spinnerService.hide();
        this.router.navigate(["/users"]);
      });
    }
  }

  getUserDetails(id) {
    this.spinnerService.show();
    this.userService.getUserDetails(id).subscribe(
      response => {
        this.user = response[0];
        this.user.status = response[0].status === true ? "Active" : "Inactive";
        this.spinnerService.hide();
      },
      error => {
        this.spinnerService.hide();
        this.growlAlertService.showError(
          "Oops! Something went wrong. Please try again letter"
        );
      }
    );
  }

  editUser(form) {
    this.isClicked = true;
    if (form.valid) {
      this.spinnerService.show();
      this.user.status = this.user.status === "Active" ? true : false;
      this.userService.editUser(this.user).subscribe(response => {
        this.router.navigate(["/users"]);
        this.spinnerService.hide();
      });
    }
  }
}
