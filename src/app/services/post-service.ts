import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Post {
  userId: number,
  id: number,
  title:string
  body: string
}
@Injectable({
  providedIn: 'root',
})
export class PostService {
  private api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<Post[]>(this.api);
  }

  addPost(user: Partial<Post>) {
    return this.http.post<Post>(this.api, user);
  }
}
