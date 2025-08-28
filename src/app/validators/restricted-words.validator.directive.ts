import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[restrictedWords]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RestrictedWordsValidatorDirective,
      multi: true
    }
  ]
})
export class RestrictedWordsValidatorDirective implements Validator {
  @Input() restrictedWords: string[] = []; // Default restricted words

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }
    const invalidWord = this.restrictedWords.map(word => control.value.includes(word)? word: null)
      .filter(word => word !== null);
    return  invalidWord.length > 0 ?
      { restrictedWords: invalidWord.join(', ') } :
      null;
  }
}
