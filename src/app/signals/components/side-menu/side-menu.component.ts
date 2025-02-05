import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem{
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  imports: [ CommonModule, RouterModule ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems = signal<MenuItem[]>([
      {title: 'Contador', route: 'counter'},
      {title: 'Usuario', route: 'user-info'},
      {title: 'Propiedades', route: 'properties'},
  ]);


  // public menuList: MenuItem[] = [
  //   {title: 'Contador', route: 'counter'},
  //   {title: 'Usuario', route: 'user-info'},
  //   {title: 'Propiedades', route: 'properties'},
  // ]

}
