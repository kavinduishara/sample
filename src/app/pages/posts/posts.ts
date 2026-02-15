import { Component, OnInit, signal } from '@angular/core';
import { PostsCard } from "../../components/posts-card/posts-card";
import { PostService,Post } from '../../services/post-service';
import { AddPostModal } from "../../components/add-post-modal/add-post-modal";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostsCard, AddPostModal],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})

export class Posts implements OnInit {
  constructor(private postService: PostService) {}

  posts = signal<Post[]>([]);
  showAddModal = signal(false);

  // ✅ store selected post (null when adding)
  postData = signal<Post | null>(null);

  openModal() {
    this.postData.set(null);        // ✅ add mode
    this.showAddModal.set(true);
  }

  closeModal() {
    this.showAddModal.set(false);
  }

  openEditModal(post: Post) {
    this.postData.set(post);        // ✅ edit mode
    this.showAddModal.set(true);
  }
  handleSave(e: { mode: 'add' | 'edit'; data: Partial<Post>; id?: number }) {
  if (e.mode === 'add') {
    this.postService.addPost(e.data).subscribe((created) => {
      // JSONPlaceholder returns the created post object
      this.posts.update(p => [created, ...p]);
      this.closeModal();
    });

  } else {
    if (!e.id) return;

    this.postService.editPost(e.id, e.data).subscribe((updated) => {
      this.posts.update(p =>
        p.map(post => post.id === e.id ? { ...post, ...updated } : post)
      );
      this.closeModal();
    });
  }
}



  ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data: any) => {
      const postsData = Array.isArray(data) ? data : (data?.data ?? []);
      this.posts.set(postsData);
    });
  }
}

