import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';
    import { RestrictedWordsValidatorDirective } from '../validators/restricted-words.validator.directive';
    import { EditContactComponent } from './edit-contact.component';

    @NgModule({
      declarations: [
        EditContactComponent
      ],
      imports: [
        CommonModule,
        FormsModule,
        RestrictedWordsValidatorDirective  // Import standalone directive instead of declaring
      ]
    })
    export class EditContactModule { }
