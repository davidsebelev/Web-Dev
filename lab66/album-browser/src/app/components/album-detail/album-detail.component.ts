import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { FavoritesService } from '../../services/favorite.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editableTitle = '';
  loading = true;
  saving = false;
  saveSuccess = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.editableTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Album not found.';
        this.loading = false;
      }
    });
  }

  saveTitle(): void {
    if (!this.album) return;
    this.saving = true;
    this.saveSuccess = false;
    const updated: Album = { ...this.album, title: this.editableTitle };
    this.albumService.updateAlbum(updated).subscribe({
      next: () => {
        this.album!.title = this.editableTitle;
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => (this.saveSuccess = false), 3000);
      },
      error: () => {
        this.saving = false;
        alert('Failed to update album.');
      }
    });
  }

  viewPhotos(): void {
    this.router.navigate(['/albums', this.album!.id, 'photos']);
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }

  isFavorite(): boolean {
    return this.album ? this.favoritesService.isFavorite(this.album.id) : false;
  }
  
  toggleFavorite(): void {
    if (this.album) this.favoritesService.toggle(this.album.id);
  }
}
