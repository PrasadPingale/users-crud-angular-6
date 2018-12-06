import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListComponent } from "./user/component/list/list.component";
import { AddComponent } from "./user/component/add/add.component";
import { routing } from "./app.routing";
import { UserService } from "./user/services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { GrowlAlertService } from "./user/services/growl-alert.service";
import { MessageService } from "primeng/api";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { ConfirmationService } from "primeng/api";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
import { TooltipModule } from "primeng/tooltip";

@NgModule({
  declarations: [AppComponent, ListComponent, AddComponent],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ToastModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    TooltipModule,
  ],
  providers: [GrowlAlertService, MessageService, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
