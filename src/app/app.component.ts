import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { PourquoiComponent } from './pourquoi/pourquoi.component';
import { PourQuiComponent } from './pour-qui/pour-qui.component';
import { BilanComponent } from './bilan/bilan.component';
import { ApresComponent } from './apres/apres.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    PourquoiComponent,
    PourQuiComponent,
    BilanComponent,
    ApresComponent,
    TarifsComponent,
    ContactComponent,
    ScrollToTopComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neuropsychologue-annecy';
}
