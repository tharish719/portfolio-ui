import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Profile } from '../../common/api.types';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PortfolioApiService {
  private base = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /** GET https://.../profile  -> returns the JSON stored in Mongo (doc.data) */
  getProfile() {
    return this.http.get<Profile>(`${this.base}/profile`).pipe(
      // cache so multiple subscribers don't refetch
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  /** Build full resume url using resumePath from API */
  buildResumeUrl(resumePath: string) {
    // resumePath should be "/resume"
    return `${this.base}${resumePath}`;
  }
}
