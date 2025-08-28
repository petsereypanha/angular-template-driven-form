import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContactListModule} from './contact-list/contact-list.module';
import {EditContactModule} from './edit-contact/edit-contact.module';
import {FormsModule} from '@angular/forms';
import { DateValueAccessorDirective } from './date-value-accessor/date-value-accessor.directive';
import { ProfileIconSelectorComponent } from './profile-icon-selector/profile-icon-selector.component';
import {ProfileIconSelectorModule} from './profile-icon-selector/profile-icon-selector.module';

let RestrictedWordsValidator;

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ContactListModule,
        EditContactModule,
        FormsModule,
        ProfileIconSelectorModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
