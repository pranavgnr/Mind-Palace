import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainmenuComponent } from './features/mainmenu/mainmenu.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { AllBlogsComponent } from './features/all-blogs/all-blogs.component';
import { AllProjectsComponent } from './features/all-projects/all-projects.component';
import { BigTileComponent } from './features/big-tile/big-tile.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component: MainmenuComponent },
  {path:'projects', component: AllProjectsComponent },
  {path: 'essays', component: AllBlogsComponent},
  {path: 'project/:id', component: BigTileComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
