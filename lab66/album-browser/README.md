# Album Browser — Lab 6

An Angular SPA that fetches albums and photos from the [JSONPlaceholder](https://jsonplaceholder.typicode.com) REST API. Demonstrates routing, HttpClient, services, and CRUD operations.

## Features

- **5 components**: Home, About, Albums (list), Album Detail (edit title), Album Photos (grid)
- **6 routes** with route parameters (`/albums/:id`, `/albums/:id/photos`)
- **AlbumService** centralises all HTTP calls — components never use HttpClient directly
- Read, Update (edit title), Delete operations with optimistic UI updates
- Loading indicators and error handling throughout
- Responsive photo grid

## How to Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm start

# 3. Open in browser
http://localhost:4200
```

## Project Structure

```
src/app/
├── models/
│   ├── album.model.ts
│   └── photo.model.ts
├── services/
│   └── album.service.ts
└── components/
    ├── navbar/
    ├── home/
    ├── about/
    ├── albums/
    ├── album-detail/
    └── album-photos/
```

## API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) — mutations are simulated (PUT/DELETE return success but don't persist server-side).
