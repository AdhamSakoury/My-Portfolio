import { Component } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  standalone: true,
  imports: [],
  templateUrl: './github-repos.html',
  styleUrl: './github-repos.css',
})
export class GithubRepos {
  repositories = [
    {
      name: 'STORIX',
      description: 'Full-stack retail platform with POS, inventory, catalog, and e-commerce across multiple brands, branches, and warehouses. Includes an admin dashboard, POS module, and customer storefront with role-based authorization.',
      url: 'https://github.com/AdhamSakoury/STORIX',
    },
    {
      name: 'Tech-Mart',
      description: 'Premium e-commerce web application with a product catalog, shopping cart, user authentication, and responsive design. Built as part of full-stack .NET training.',
      url: 'https://github.com/AdhamSakoury/Tech-Mart',
    },
    {
      name: 'BookHaven Store',
      description: 'A responsive online bookstore with book categories, detailed product information, and a shopping cart for a smooth, user-friendly shopping experience.',
      url: 'https://github.com/AdhamSakoury/BookHaven-Store',
    },
    {
      name: 'Traflager Project',
      description: 'A responsive healthcare landing page for exploring medical services, learning about doctors, and navigating the platform through a clean, professional interface.',
      url: 'https://github.com/AdhamSakoury/Traflager-Project',
    },
    {
      name: 'Gnouby Perfumes',
      description: 'A modern, responsive perfume store with product categories, detailed product pages, and a shopping cart, presented in an elegant design inspired by the brand.',
      url: 'https://github.com/AdhamSakoury/Gnouby-Perfumes',
    },
  ];
}
