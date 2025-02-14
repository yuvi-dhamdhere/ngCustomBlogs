import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CustomServiceService } from './custom-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp for Blogs';
  
  constructor(private _serviceObj: CustomServiceService){
    _serviceObj.getExternalData().subscribe(data=>{
      console.log("External Data: "+ data)
    });
  }
}
