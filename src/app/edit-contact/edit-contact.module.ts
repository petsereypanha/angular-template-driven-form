import {forwardRef, NgModule, Provider} from '@angular/core';
    import { CommonModule } from '@angular/common';
    import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
    import { RestrictedWordsValidatorDirective } from '../validators/restricted-words.validator.directive';
    import { EditContactComponent } from './edit-contact.component';
import {DateValueAccessorDirective} from '../date-value-accessor/date-value-accessor.directive';
import {ProfileIconSelectorModule} from '../profile-icon-selector/profile-icon-selector.module';

    @NgModule({
      declarations: [
        EditContactComponent,
      ],
      imports: [
        CommonModule,
        FormsModule,
        RestrictedWordsValidatorDirective,
        DateValueAccessorDirective,
        ProfileIconSelectorModule
      ]
    })
    export class EditContactModule { }
