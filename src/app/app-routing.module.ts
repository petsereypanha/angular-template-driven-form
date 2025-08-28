import {importProvidersFrom, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from './contact-list/contact-list.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryContactsApi} from './contacts/in-memory-contacts.service';
import {provideHttpClient} from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'contacts',
    component: ContactListComponent,
    title: 'Contacts'
  },
  {
    path: 'contacts/edit/:id',
    component: EditContactComponent,
    title: 'Contacts - Edit'
  },
  {
    path: 'contacts/edit',
    component: EditContactComponent,
    title: 'Contacts - Edit'
  },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryContactsApi, { delay: 0 }))
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
