import { Component } from '@angular/core';

@Component({
  selector: 'edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css'],
})
export class EditButtonComponent {
  message = 'Hello World';
  toggle = false;

  onEditClick() {
    this.toggle = !this.toggle;
  }
}
