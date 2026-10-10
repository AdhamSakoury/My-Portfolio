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
      description: 'A modern, responsive e-commerce website for browsing and purchasing books. Users can explore books and categories, view detailed book information, and add favorites to their cart through a clean, user-friendly shopping experience.',
      image: 'assets/img/projects/bookhaven.png',
      github: 'https://github.com/AdhamSakoury/BookHaven-Store',
      live: 'https://adhamsakoury.github.io/BookHaven-Store/'
    },
    {
      title: 'Tech Mart',
      category: 'Premium eCommerce Platform',
      description: 'A premium e-commerce web application featuring a product catalog, shopping cart, user authentication, and responsive design. Built as part of full-stack .NET training.',
      image: 'assets/img/projects/techmart.jpg',
      github: 'https://github.com/AdhamSakoury/Tech-Mart',
      live: 'https://swo-tech-mart.vercel.app/'
    },
    {
      title: 'Traflager Project',
      category: 'Doctors Landing Page',
      description: 'A modern, responsive landing page for a healthcare platform. It helps users explore medical services, learn about doctors, and navigate the platform through a clean, professional, and trustworthy interface.',
      image: 'assets/img/projects/traflager.png',
      github: 'https://github.com/AdhamSakoury/Traflager-Project',
      live: 'https://adhamsakoury.github.io/Traflager-Project/'
    },
    {
      title: 'Dar',
      category: 'PropTech SaaS Platform',
      description: 'ITI graduation project : A modern SaaS platform for property and tenant management, featuring digital contracts, rent tracking, automated invoicing, and multi-role dashboards for owners, tenants, and HOA managers. Built with Angular and ASP.NET Core using Clean Architecture.',
      image: 'assets/img/projects/Dar.png',
      github: 'https://github.com/Dar-Platform',
      live: 'https://dar-app.runasp.net/'
    },
    {
      title: 'Gnouby Perfumes',
      category: 'E-Commerce Website',
      description: 'A modern, responsive e-commerce website for premium perfumes. Customers can explore categories, view product details, and add products to their cart through a smooth shopping experience and an elegant design that reflects the brand.',
      image: 'assets/img/projects/perfumes.png',
      github: 'https://github.com/AdhamSakoury/Perfiumes',
      live: 'https://perfiumes.vercel.app/'
    },
    {
      title: 'Storix',
      category: 'Smart POS & Retail System',
      description: 'A full-stack retail platform built with Clean Architecture, unifying POS, inventory, catalog, and e-commerce across multiple brands, branches, and warehouses. Includes an admin dashboard, POS module, and customer storefront with role-based authorization.',
      image: 'assets/img/projects/Storix.png',
      github: 'https://github.com/AdhamSakoury/STORIX',
      live: 'http://storix.runasp.net/'
    }
  ];
}