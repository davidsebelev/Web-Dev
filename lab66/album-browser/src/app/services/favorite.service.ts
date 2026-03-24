import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private storageKey = 'favorite_albums';

  private favoritesSubject = new BehaviorSubject<Set<number>>(this.loadFromStorage());


  favorites$ = this.favoritesSubject.asObservable();

  private loadFromStorage(): Set<number> {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  }

  private save(favorites: Set<number>): void {
    localStorage.setItem(this.storageKey, JSON.stringify([...favorites]));
    this.favoritesSubject.next(favorites);
  }

  toggle(id: number): void {
    const current = new Set(this.favoritesSubject.getValue());
    current.has(id) ? current.delete(id) : current.add(id);
    this.save(current);
  }

  isFavorite(id: number): boolean {
    return this.favoritesSubject.getValue().has(id);
  }

  getCount(): number {
    return this.favoritesSubject.getValue().size;
  }
}