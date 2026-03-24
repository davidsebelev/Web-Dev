import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { FavoritesService } from '../../services/favorite.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error: string | null = null;
  showOnlyFavorites = false;

  constructor(
    private albumService: AlbumService,
    private router: Router,
    private favoritesService: FavoritesService  
  ) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
      }
    });
  }

  goToDetail(id: number): void {
    this.router.navigate(['/albums', id]);
  }

  deleteAlbum(event: Event, id: number): void {
    event.stopPropagation();
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
      },
      error: () => {
        alert('Failed to delete album.');
      }
    });
  }



  toggleFavorite(event: Event, id: number): void {
    event.stopPropagation();
    this.favoritesService.toggle(id);
  }

  toggleFilter(): void {
    this.showOnlyFavorites = !this.showOnlyFavorites;
  }

  isFavorite(id: number): boolean {
    return this.favoritesService.isFavorite(id);
  }

  get favoritesCount(): number {
    return this.favoritesService.getCount();
  }

  get filteredAlbums(): Album[] {
    if (!this.showOnlyFavorites) return this.albums;
    return this.albums.filter(a => this.favoritesService.isFavorite(a.id));
  }
}