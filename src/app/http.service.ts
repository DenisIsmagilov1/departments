import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  private baseUrl = 'https://spring-silence-3847.getsandbox.com:443';

  constructor(private http: HttpClient) { }

  getDepartments() {
    return this.http.get(`${this.baseUrl}/departments`);
  }

  createDepartment(body) {
    return this.http.post(`${this.baseUrl}/departments/create`, body);
  }

  updateDepartment(body) {
    return this.http.put(`${this.baseUrl}/departments/update`, body);
  }

  deleteDepartment(id) {
    return this.http.delete(`${this.baseUrl}/departments/delete?id=${id}`);
  }

  getEmployees() {
    return this.http.get(`${this.baseUrl}/employees`);
  }

  createEmployee(body) {
    return this.http.post(`${this.baseUrl}/employees/create`, body);
  }

  updateEmployee(body) {
    return this.http.put(`${this.baseUrl}/employees/update`, body);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.baseUrl}/employees/delete?id=${id}`);
  }
}
