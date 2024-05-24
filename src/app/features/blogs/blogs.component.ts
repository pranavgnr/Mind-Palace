import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  constructor(private router: Router) { }


  ngOnInit(){

  }

  redirectTo(){
    this.router.navigate(['/essays']);
  }
}
