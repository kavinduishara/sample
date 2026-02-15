import { Component, input, output, signal } from '@angular/core';
import { Post } from '../../services/post-service';

@Component({
  selector: 'app-posts-card',
  standalone: true,
  templateUrl: './posts-card.html',
  styleUrl: './posts-card.scss',
})
export class PostsCard {
  postData = input<Post | null>(null);
  editPost = output<Post>();

  isExpanded = signal(false);
  showComments = signal(false);

  toggleBody() {
    this.isExpanded.update(v => !v);
  }

  toggleComments() {
    this.showComments.update(v => !v);
  }

  edit() {
    const post = this.postData();   // ✅ read the signal
    if (post) {
      this.editPost.emit(post);     // ✅ emit actual Post
    }
  }
}
