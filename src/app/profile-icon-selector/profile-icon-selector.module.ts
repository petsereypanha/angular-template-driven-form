import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileIconSelectorComponent} from './profile-icon-selector.component';

@NgModule({
  declarations: [
    ProfileIconSelectorComponent
  ],
  exports: [
    ProfileIconSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileIconSelectorModule { }
