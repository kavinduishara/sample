import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-modal-component',
  standalone: true,
  templateUrl: './modal-component.html',
  styleUrl: './modal-component.scss',
})
export class ModalComponent {
  title = input<string>('Modal');
  closed = output<void>();

  close() {
    this.closed.emit();
  }
}
