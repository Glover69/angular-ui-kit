import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import {
  ButtonGroupsComponent,
  ButtonProps,
} from './components/button-groups/button-groups.component';

@Component({
  selector: 'app-root',
  imports: [ButtonGroupsComponent, ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ui-kit';

  groupedButtons: ButtonProps[] = [
    {
      size: 'md',
      hierarchy: 'tertiary-gray',
      icon: "leading",
      isDestructive: false,
      text: 'Hello',
      iconName: 'acorn',
      iconStyle: 'regular',
      disabled: false,
      loading: true,
    },
    {
      size: 'md',
      hierarchy: 'tertiary-gray',
      icon: 'leading',
      isDestructive: false,
      text: 'Hello',
      iconName: 'airplane',
      iconStyle: 'bold',
      disabled: false,
      loading: false,
    },
    {
      id: 'hello',
      size: 'md',
      hierarchy: 'tertiary-gray',
      icon: 'leading',
      isDestructive: false,
      text: 'Hello',
      iconName: 'acorn',
      iconStyle: 'duotone',
      disabled: false,
      loading: false,
    },
  ];

  onGroupClick(e: { index: number; item: ButtonProps; event: MouseEvent }) {
    console.log('clicked', e.index, e.item?.id);
  }
}
