import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-kit';
}
