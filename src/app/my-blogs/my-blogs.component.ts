import { Component, OnInit } from '@angular/core';
import {CustomServiceService } from '../custom-service.service';
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

  blogList: any = []; catagoryList: any = [];
  categories: any = []; // Array to hold categories
  imageURL: any = "../../assets/images/deleteIcon.jpg"
  constructor(private _serviceObj: CustomServiceService,
    private router: Router){}

  ngOnInit(){
    //let id = this.router.snapshot.params['id'];
    //this.loadCategories();
    this._serviceObj.getAllBlogswithCat().subscribe(data=>{
      this.blogList = data;
      //console.log(this.blogList);
    });
    this._serviceObj.getAllCategoryData().subscribe(data=>{
      this.catagoryList = data;
      //console.log(this.catagoryList);
    });
    //window.setTimeout(this.getCategoryName, 2000);
  }

  getCategoryName(){
    this.categories = this.catagoryList.map((e:any) => e.categoryId === this.blogList.categoryId ? this.catagoryList.categoryName : e.categoryId);
    console.log(this.categories);
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
