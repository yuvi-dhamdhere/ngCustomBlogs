import { Component, inject, OnInit } from '@angular/core';
import {CustomServiceService } from '../custom-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-blog.component.html',
  styleUrl: './view-blog.component.css'
})
export class ViewBlogComponent implements OnInit{
  route=inject(ActivatedRoute);
  tblData1: any; 
  constructor(private _serviceObj: CustomServiceService){}

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this._serviceObj.getBlogsbyId(id).subscribe(data=>{
      this.tblData1 = data;
    });
  }
}
