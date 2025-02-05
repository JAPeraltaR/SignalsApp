import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'app-signals-layout',
  imports: [ RouterModule, SideMenuComponent ],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css'
})
export class SignalsLayoutComponent {

}
