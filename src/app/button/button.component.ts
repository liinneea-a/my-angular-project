import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  canClick = false;
  message = 'Hello, World';

  sayMessage() {
    alert(this.message);
  }
}
