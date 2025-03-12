import { Routes } from '@angular/router';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { AboutBlogsComponent } from './about-blogs/about-blogs.component';
import { AddBlogsComponent } from './add-blogs/add-blogs.component';
import { BloginComponent } from './blogin/blogin.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

export const routes: Routes = [
    {path: "AddBlog", component: AddBlogsComponent},
    {path: "blogs", component: MyBlogsComponent},
    {path: "viewblog/:id", component: ViewBlogComponent},
    {path: "about", component: AboutBlogsComponent},
    {path: "**", component: BloginComponent},
];
