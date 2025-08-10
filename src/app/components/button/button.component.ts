import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {

  }
})
export class ButtonComponent {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'sm'
  @Input() hierarchy: 'primary' | 'secondary' | 'secondary-gray' | 'tertiary' | 'tertiary-gray' | 'link-color' | 'link-gray' = 'primary'
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // NEW
  @Input() icon: 'false' | 'leading' | 'trailing' | 'only'  = 'leading';
  @Input() isDestructive = false;
  @Input() text: string | null = ''
  @Input() iconName: string | null = ''
  @Input() iconStyle?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' | null = 'regular'
  @Input() disabled = false;
  @Input() loading = false;
  @Input() name?: string;
  @Input() value?: string;
  @Input() isInGroup?: boolean = false


  @Output() clicked = new EventEmitter<MouseEvent>();       // NEW

  onClick(event: MouseEvent) {
    if (!this.disabled && !this.loading) this.clicked.emit(event);
  }

}
