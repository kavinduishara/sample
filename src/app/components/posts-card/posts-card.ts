import { Component, input, signal } from '@angular/core';
import { Post } from '../../services/post-service';

@Component({
  selector: 'app-posts-card',
  imports: [],
  templateUrl: './posts-card.html',
  styleUrl: './posts-card.scss',
})
export class PostsCard {

  postData=input<Post>()

  
  isExpanded = signal(false);
  showComments = signal(false);

  toggleBody() {
    this.isExpanded.update(v => !v);
  }

  toggleComments() {
    this.showComments.update(v => !v);
  }

}
