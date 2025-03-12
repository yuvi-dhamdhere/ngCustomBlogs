import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { blog } from './types/blogs';
import { category } from './types/category';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  globalServer: string = "localhost:5081";
  constructor(private _httpClient: HttpClient) {  }

  getMyBlogs(){
    return "It a important blog."
  }

  getAllCategoryData() : Observable<Object>{
    return this._httpClient.get<category[]>("http://"+this.globalServer+"/api/Category");
  }
  getAllBlogsData() : Observable<Object>{
    return this._httpClient.get<blog[]>("http://"+this.globalServer+"/api/Blog");
  }
  getBlogsbyId(id : number) : Observable<Object>{
    return this._httpClient.get<blog[]>("http://"+this.globalServer+"/api/Blog/"+ id);
  }
  removeBlogData(id : number) : Observable<Object>{
    return this._httpClient.delete("http://"+this.globalServer+"/api/Blog/"+ id);
  }
  updateBlogData(updateBlog: blog) : Observable<Object>{
    return this._httpClient.put<blog[]>("http://"+this.globalServer+"/api/Blog", updateBlog);
  }

  createBlogPost(postBlog: blog): Observable<blog[]> {
    return this._httpClient.post<blog[]>("http://"+this.globalServer+"/api/Blog", postBlog);
  }

}
