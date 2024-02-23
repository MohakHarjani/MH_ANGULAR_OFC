import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  
  //registering app level routes with router service
  //provideRouter is a inbuilt "Service:"
  
  providers: [provideRouter(routes)]
};
