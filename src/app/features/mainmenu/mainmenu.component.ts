import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrl: './mainmenu.component.css'
})
export class MainmenuComponent {

  constructor(private router: Router) {}

  onFloatingButtonClick() {
    this.router.navigate(['/create-blog'])
  }
}
