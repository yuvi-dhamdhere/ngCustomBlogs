import { Component } from '@angular/core';
import {CustomServiceService } from '../custom-service.service';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [],
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export class MyBlogsComponent {

  constructor(private _serviceObj : CustomServiceService){
    console.log ("My Blogs Component :"+ _serviceObj.getMyBlogs());
  }
}
