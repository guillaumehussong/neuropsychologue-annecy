import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations()
    // Add other providers here if needed, e.g., provideRouter([]) for routing
  ]
})
  .catch(err => console.error(err));
