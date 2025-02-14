import { Routes } from '@angular/router';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { AboutBlogsComponent } from './about-blogs/about-blogs.component';

export const routes: Routes = [
    {path: "blogs", component: MyBlogsComponent},
    {path: "about", component: AboutBlogsComponent}
];
