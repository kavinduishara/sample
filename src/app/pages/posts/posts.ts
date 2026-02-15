import { Component, OnInit, signal } from '@angular/core';
import { PostsCard } from "../../components/posts-card/posts-card";
import { PostService,Post } from '../../services/post-service';

@Component({
  selector: 'app-posts',
  imports: [PostsCard],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts implements OnInit{
  constructor(private postService: PostService) {} 
  posts=signal<Post[]>([])

  ngOnInit(): void {
  this.postService.getAllPosts().subscribe((data: any) => {
    const postsData = Array.isArray(data) ? data : (data?.data ?? []);
    this.posts.set(postsData);   // ✅ correct
  });
}


}
