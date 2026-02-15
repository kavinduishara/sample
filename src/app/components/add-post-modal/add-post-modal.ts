import { Component, effect, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalComponent } from '../modal-component/modal-component';
import { Post } from '../../services/post-service';

@Component({
  selector: 'app-add-post-modal',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './add-post-modal.html',
  styleUrl: './add-post-modal.scss',
})
export class AddPostModal {
  // ✅ input from parent (null = add, Post = edit)
  postData = input<Post | null>(null);

  closed = output<void>();

  // ✅ emit saved data back to parent (optional but useful)
  saved = output<{ mode: 'add' | 'edit'; data: Partial<Post>; id?: number }>();

  form = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    body: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });


  // ✅ when postData changes, patch form (for edit)
  constructor() {
    effect(() => {
      const post = this.postData();
      if (post) {
        this.form.patchValue({
          title: post.title ?? '',
          body: post.body ?? '',
        });
      } else {
        this.form.reset({ title: '', body: '' });
      }
    });
  }

  submit() {
    if (this.form.invalid) return;

    const post = this.postData();
    const payload = this.form.getRawValue();

    if (post) {
      this.saved.emit({ mode: 'edit', id: post.id, data: payload });
    } else {
      this.saved.emit({ mode: 'add', data: payload });
    }

    this.closed.emit();
  }
}
