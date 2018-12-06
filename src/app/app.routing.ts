import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./user/component/list/list.component";
import { AddComponent } from "./user/component/add/add.component";

const routes: Routes = [
  { path: "users", component: ListComponent },
  { path: "add-user", component: AddComponent },
  { path: "edit-user/:id", component: AddComponent },
  { path: "", component: ListComponent },
];

export const routing = RouterModule.forRoot(routes);
