import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.css'
})
export class AllBlogsComponent {

  constructor(private router: Router) {}

  redirectFn(){
    this.router.navigate(['/project/1']);
  }
}
