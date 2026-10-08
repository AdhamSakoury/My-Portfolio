import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      title: 'BookHaven Store',
      category: 'E-Commerce Website',
      image: 'assets/img/projects/bookhaven.png',
      github: 'https://github.com/AdhamSakoury/BookHaven-Store',
      live: 'https://adhamsakoury.github.io/BookHaven-Store/'
    },
    {
      title: 'Tech Mart',
      category: 'Premium eCommerce Platform',
      image: 'assets/img/projects/techmart.jpg',
      github: 'https://github.com/AdhamSakoury/Tech-Mart',
      live: 'https://swootechmart.netlify.app/'
    },
    {
      title: 'Traflager Project',
      category: 'Doctors Landing Page',
      image: 'assets/img/projects/traflager.png',
      github: 'https://github.com/AdhamSakoury/Traflager-Project',
      live: 'https://adhamsakoury.github.io/Traflager-Project/'
    },
    {
      title: 'Dar',
      category: 'PropTech SaaS Platform',
      image: 'assets/img/projects/Dar.png',
      github: 'https://github.com/Dar-Platform',
      live: 'https://dar-app.runasp.net/'
    },
    {
      title: 'Gnouby Perfumes',
      category: 'E-Commerce Website',
      image: 'assets/img/projects/perfumes.png',
      github: 'https://github.com/AdhamSakoury/Gnouby-Perfumes',
      live: 'https://adhamsakoury.github.io/Gnouby-Perfumes/'
    },
    {
      title: 'Storix',
      category: 'Smart POS & Retail System',
      image: 'assets/img/projects/Storix.png',
      github: 'https://github.com/AdhamSakoury/STORIX',
      live: 'https://storix-001-site1.ntempurl.com/'
    }
  ];
}