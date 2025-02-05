import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[changeLabel]',
  standalone: true
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color( value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors( value: ValidationErrors | null | undefined ){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor( private el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setStyle();
  }

  setStyle(): void {
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setErrorMessage(): void {
    if( !this.htmlElement ) return;
    if( !this._errors ){
      this.htmlElement.nativeElement.innerText = '';
      return;
    }
    const errores = Object.keys(this._errors);
    if(errores.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }
    if(errores.includes('minlength')){
      this.htmlElement.nativeElement.innerHTML = `Este campo requiere un minimo de ${ this._errors['minlength'].requiredLength } digitos `;
      return;
    }
    if(errores.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo no es un email';
      return;
    }

  }

}
