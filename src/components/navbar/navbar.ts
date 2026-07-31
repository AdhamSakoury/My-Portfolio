import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  isMenuOpen = false;
  isDarkMode = false;

  private readonly themeStorageKey = 'portfolio-theme';

  constructor() {
    this.isDarkMode = this.getInitialTheme() === 'dark';
    this.applyTheme();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    this.saveTheme();
  }

  private getInitialTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') {
      return 'light';
    }

    let savedTheme: string | null = null;

    try {
      savedTheme = window.localStorage.getItem(this.themeStorageKey);
    } catch {
      savedTheme = null;
    }

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  private applyTheme() {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  private saveTheme() {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      window.localStorage.setItem(this.themeStorageKey, this.isDarkMode ? 'dark' : 'light');
    } catch {
      return;
    }
  }
}
