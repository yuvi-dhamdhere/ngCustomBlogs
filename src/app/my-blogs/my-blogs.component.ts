import { Component, OnInit } from '@angular/core';
import {CustomServiceService } from '../custom-service.service';
import { blog } from '../types/blogs';
import { NgFor } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-my-blogs',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './my-blogs.component.html',
  styleUrl: './my-blogs.component.css'
})
export class MyBlogsComponent implements OnInit {

  tblData1: any; tblData2: any;
  categories: any = []; // Array to hold categories
  constructor(private _serviceObj: CustomServiceService, private router: Router){}

  ngOnInit(){
    this.loadCategories();
    this._serviceObj.getAllBlogsData().subscribe(data=>{
      this.tblData1 = data;
    });
  }

  loadCategories() {
    this._serviceObj.getAllCategoryData().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      },
    });
  }

  deleteBlog(blogId: number){
    if(confirm("Are you sure, you want to delete blog?")){
      this._serviceObj.removeBlogData(blogId).subscribe(()=>{
        this.router.navigate(['/blogs']);
      });
    }
  }
}
