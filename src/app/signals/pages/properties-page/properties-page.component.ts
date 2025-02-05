import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { Data } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-properties-page',
  imports: [ CommonModule ],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnDestroy, OnInit{
  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current => current +1);
      if( this.counter() == 15) {
        this.userChangedEffect.destroy();
      }
    }, 1000)
  }

  public counter = signal(10)

  public user = signal<Data>({
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  });

  public fullName = computed( () => `${this.user()?.first_name}  ${this.user()?.last_name}`);
  public userChangedEffect = effect( () => {
    console.log( `${ this.user().first_name} - ${ this.counter() }` );

  })

  onFieldUpdate( field: keyof Data, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });

    // this.user.update( current => ({
    //   ...current, [field]: value
    // }))

    this.user.update( current => {
      switch(field){
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
      return current;
    })
  }

  ngOnDestroy(): void {
    this.userChangedEffect.destroy();
  }
}
