import { Component } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import {
  ButtonGroupsComponent,
  ButtonProps,
} from './components/button-groups/button-groups.component';
import { InputFieldBaseComponent } from './components/input-field-base/input-field-base.component';
import { DatePickerComponent } from "./components/date-picker/date-picker.component";
import { TimePickerComponent } from "./components/time-picker/time-picker.component";
import { DrawerComponent } from "./components/drawer/drawer.component";

@Component({
  selector: 'app-root',
  imports: [
    ButtonGroupsComponent,
    ButtonComponent,
    CardComponent,
    InputFieldBaseComponent,
    DatePickerComponent,
    TimePickerComponent,
    DrawerComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ui-kit';

  countryOptions = [
    { label: 'US', value: 'US' },
    { label: 'GH', value: 'GH' },
    { label: 'NG', value: 'NG' },
  ];

  groupedButtons: ButtonProps[] = [
    {
      size: 'md',
      hierarchy: 'tertiary-gray',
      icon: 'leading',
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
drawerOpen: any;

  onGroupClick(e: { index: number; item: ButtonProps; event: MouseEvent }) {
    console.log('clicked', e.index, e.item?.id);
  }
}
