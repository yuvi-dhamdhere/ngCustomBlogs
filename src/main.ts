import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient} from '@angular/common/http';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';

//bootstrapApplication(AppComponent, appConfig)
  
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),
    provideRouter(routes, withComponentInputBinding()),
  ]
}).catch((err) => console.error(err));
