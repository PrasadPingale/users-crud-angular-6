import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { User } from "../Model/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  baseUrl = "https://usermanagmentpoc.herokuapp.com";
  corsUrl = "https://cors-anywhere.herokuapp.com/";

  getListOfUsers() {
    return this.http.get(`${this.baseUrl}/get`);
  }

  addUser(request) {
    return this.http.post(`${this.baseUrl}/create`, request);
  }

  editUser(request) {
    return this.http.put(`${this.baseUrl}/update`, request);
  }

  deleteUser(id) {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }

  getUserDetails(id) {
    return this.http.get(`${this.baseUrl}/get/${id}`);
  }
}
