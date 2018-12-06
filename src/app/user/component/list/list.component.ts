import { Component, OnInit } from "@angular/core";

import { UserService } from "../../services/user.service";
import { GrowlAlertService } from "../../services/growl-alert.service";
import { ConfirmationService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  usersData: any;
  p: Number = 1;
  pageSize: Number = 2;
  total: Number;
  constructor(
    private userService: UserService,
    private growlAlertService: GrowlAlertService,
    private confirmationService: ConfirmationService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.spinnerService.show();
    this.userService.getListOfUsers().subscribe(res => {
      this.usersData = res;
      this.total = this.usersData.length;
      this.spinnerService.hide();
    });
  }

  deleteUser(id) {
    this.spinnerService.show();
    this.userService.deleteUser(id).subscribe(response => {
      this.growlAlertService.showSuccess("User Deleted Succefully");
      this.getUsersList();
      this.spinnerService.hide();
    });
  }

  confirm(rowData) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to delete ${rowData.firstName} ${
        rowData.lastName
      }`,
      accept: () => {
        this.deleteUser(rowData._id);
      },
    });
  }
}
