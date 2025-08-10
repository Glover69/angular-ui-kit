import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-input-field-base',
  imports: [CommonModule],
  templateUrl: './input-field-base.component.html',
  styleUrl: './input-field-base.component.css'
})
export class InputFieldBaseComponent {
  @Input() inputType: 'base' | 'textarea' = 'base'
  @Input() label: string = ''
  @Input() placeholder: string = ''
  @Input() baseInputType: 'default' | 'leading-dropdown' | 'trailing-dropdown' | 'leading-text' = 'default'
  @Input() icon: string = ''
  @Input() iconName: string | null = ''
  @Input() iconStyle?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' | null = 'regular'
  @Input() isDestructive: boolean = false
  @Input() hintText: string = ''
  @Input() leadingOptions?: Array<{ label: string; value: string }>;
  @Input() trailingOptions?: Array<{ label: string; value: string }>;
  @Input() leadingTextValue: string = ''
  @Input() disabled: boolean = false
}
