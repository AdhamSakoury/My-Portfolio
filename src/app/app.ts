import { Component } from '@angular/core';

import { Navbar } from '../components/navbar/navbar';
import { Home } from '../components/home/home';
import { About } from '../components/about/about';
import { Resume } from '../components/resume/resume';
import { Services } from '../components/services/services';
import { Skills } from '../components/skills/skills';
import { Projects } from '../components/projects/projects';
import { Faq } from '../components/faq/faq';
import { Contact } from '../components/contact/contact';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Home,
    About,
    Resume,
    Services,
    Skills,
    Projects,
    Faq,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}