import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm'
  @Input() hierarchy: 'primary' | 'secondary' | 'secondary-gray' | 'tertiary' | 'tertiary-gray' | 'link-color' | 'link-gray' = 'primary'
  // @Input() hasIcon: boolean = false;
  @Input() icon: 'false' | 'leading' | 'trailing' | 'only'  = 'leading';
  @Input() isDestructive = false;
  @Input() text: string = ''
  @Input() iconName: string = ''
  @Input() iconStyle: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' = 'regular'
  @Input() disabled = false;
  @Input() loading = false;

}
