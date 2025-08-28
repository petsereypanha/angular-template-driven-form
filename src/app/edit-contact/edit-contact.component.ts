import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {addressTypesValues, Contact, phoneTypesValues} from '../contacts/contact.model';
import {ContactsService} from '../contacts/contacts.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-edit-contact',
  standalone: false,
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.scss'
})
export class EditContactComponent implements OnInit {
  phoneTypes = phoneTypesValues;
  addressTypes = addressTypesValues;
  contact: Contact = {
    id: '',
    personal: false,
    firstName: '',
    lastName: '',
    dateOfBirth: 'null',
    favoritesRanking: 0,
    phone: { phoneNumber: '', phoneType: '' },
    address: { streetAddress: '', city: '', state: '', postalCode: '', addressType: '' },
    notes: ''
  };
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private router: Router
    ) { }

  ngOnInit() {
    const contactId = this.route.snapshot.params['id'];
    if (!contactId) return;

    this.contactsService.getContact(contactId).subscribe({
      next: (contact: Contact | undefined) => {
        if (contact) {
          this.contact = contact;
        } else {
          console.error('Contact not found');
        }
      },
      error: (err) => {
        console.error('Error fetching contact', err);
      }
    });
  }

  saveContact(form:NgForm) {
    console.info('Form data:', form.value);
    console.info('Personal :', this.contact.personal, typeof this.contact.personal);
    this.contactsService.saveContact(form.value).subscribe({
      next: () => {
        this.router.navigate(['/contacts']).then(r => console.info(r));
      },
      error: (err) => {
        console.error('Error saving contact', err)
      }
    })
  }
}
