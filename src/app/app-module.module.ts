import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyBlogsComponent} from './my-blogs/my-blogs.component'
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [MyBlogsComponent],
  imports: [
    CommonModule, 
    HttpClientModule
  ]
})
export class AppModuleModule { }
