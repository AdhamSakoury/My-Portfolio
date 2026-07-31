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
      title: 'Foodie Delight',
      category: 'HTML • CSS • JavaScript',
      image: 'assets/img/projects/foodie.png',
      github: 'https://github.com/AdhamSakoury/FoodieDelight',
      live: 'https://adhamsakoury.github.io/FoodieDelight/'
    },

    {
      title: 'Gnouby Perfumes',
      category: 'E-Commerce Website',
      image: 'assets/img/projects/perfumes.png',
      github: 'https://github.com/AdhamSakoury/Gnouby-Perfumes',
      live: 'https://adhamsakoury.github.io/Gnouby-Perfumes/'
    },

    {
      title: 'Nexus AI',
      category: 'JavaScript Project',
      image: 'assets/img/projects/nexus-ai.jpg',
      github: 'https://github.com/AdhamSakoury/Nexus-AI',
      live: 'https://adhamsakoury.github.io/Nexus-AI/'
    },

    {
      title: 'Tech Mart',
      category: 'E-Commerce Final Website',
      image: 'assets/img/projects/techmart.jpg',
      github: 'https://github.com/AdhamSakoury/Tech-Mart',
      live: 'https://swootechmart.netlify.app/'
    },

    {
      title: 'Traflager Project',
      category: 'ITI First Project',
      image: 'assets/img/projects/traflager.png',
      github: 'https://github.com/AdhamSakoury/Traflager-Project',
      live: 'https://adhamsakoury.github.io/Traflager-Project/'
    }
  ];

}