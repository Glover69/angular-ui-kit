import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css'
})
export class BadgeComponent {
  @Input() labelTheme: 'gray' | 'brand' | 'error' | 'warning' | 'success' | 'custom' = 'brand'
  @Input() icon: 'false' | 'leading' | 'trailing' | 'only'  = 'leading';
  @Input() iconType: 'icon' | 'avatar' | 'country' = 'icon'
  @Input() textColor: string = ''
  @Input() accentColor: string = ''
  @Input() text: string = ''


}
