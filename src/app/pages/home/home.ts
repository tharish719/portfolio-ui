import { Component, computed, inject, signal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { PortfolioApiService } from './home.service';
import { Profile } from '../../common/api.types';

type Project = {
  name: string;
  desc: string;
  stack: string[];
  link?: string;
};

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class HomeComponent {

   // ✅ Your public resume endpoint
  resumeUrl = `${environment.apiBaseUrl}/resume`;

 

  private api = inject(PortfolioApiService);

  // UI state
  loading = signal(true);
  error = signal<string | null>(null);
  profile = signal<Profile | null>(null);

  constructor() {
    this.api.getProfile().subscribe({
      next: (p) => {
        this.profile.set(p);
        this.loading.set(false);
      },
      error: (e) => {
        this.error.set(e?.error?.message || 'Failed to load profile');
        this.loading.set(false);
      },
    });
  }

}
