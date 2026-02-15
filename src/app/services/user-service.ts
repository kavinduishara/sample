import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.api);
  }

  addUser(user: Partial<User>) {
    return this.http.post<User>(this.api, user);
  }
  
}
