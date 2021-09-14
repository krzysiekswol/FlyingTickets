import {Component} from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent {
  mobileMenu = false;
  constructor() {}
  showMobileMenu(): boolean {
     return this.mobileMenu = !this.mobileMenu;
  }

}
