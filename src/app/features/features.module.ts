import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';
import { AboutSectionComponent } from './about-section/about-section.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { RouterModule } from '@angular/router';
import { AllProjectsComponent } from './all-projects/all-projects.component';
import { BigTileComponent } from './big-tile/big-tile.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { NgxEditorModule } from 'ngx-editor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainmenuComponent,
    ProjectsComponent,
    BlogsComponent,
    AboutSectionComponent,
    AllBlogsComponent,
    AllProjectsComponent,
    BigTileComponent,
    CreateBlogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgxEditorModule,
    FormsModule
  ],
  exports: [
  ]
})
export class FeaturesModule { }
