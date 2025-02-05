import { Component, computed, inject, OnInit, Signal, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Data } from '../../interfaces/user.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info-page',
  imports: [ CommonModule ],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{


  private userService =  inject(UserService)

  public userId = signal(1);

  public fullName = computed<string>(() => {
    if( !this.currentUser() ) return 'Usuario no encontrado';
    return `${this.currentUser()?.first_name}  ${this.currentUser()?.last_name}`;
  });

  public currentUser = signal<Data|undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.getUser(this.userId());
  }

  getUser( id: number ): void {
    if( id < 1 ) return;
    this.userId.set(id);
    this.userService.getUsers( id )
      .subscribe({
        next: ( user ) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: () => {this.userWasFound.set(false)},
      });
  }

}
