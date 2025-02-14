import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  constructor(private _httpClient: HttpClient) { }

  getMyBlogs(){
    return "It a important blog."
  }
  getExternalData(){
    //return this._httpClient.get("https://jsonplaceholder.typicode.com/todos/1");
  }
}
