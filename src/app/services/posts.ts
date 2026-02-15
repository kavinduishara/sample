import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {
  userId: number,
  id: number,
  title:string
  body: string
}
@Injectable({
  providedIn: 'root',
})
export class Posts {
  private api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Post[]>(this.api);
  }

  addUser(user: Partial<Post>) {
    return this.http.post<Post>(this.api, user);
  }
  
}
