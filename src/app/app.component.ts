import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import {CustomServiceService } from './custom-service.service';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyBlogsComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp for Blogs';  
}
