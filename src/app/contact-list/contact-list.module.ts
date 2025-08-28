import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list.component';

@NgModule({
  declarations: [
    ContactListComponent
  ],
  imports: [
    CommonModule,
    RouterModule  // Add RouterModule for routerLink support
  ],
  exports: [
    ContactListComponent
  ]
})
export class ContactListModule { }
