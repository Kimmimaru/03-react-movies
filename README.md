# 03-react-movies

A movie search application built with React, TypeScript, Vite, and the TMDB API.

## Features

- Search for movies by keyword using the TMDB API
- Display search results in a responsive grid layout
- Click on a movie to view detailed information in a modal
- Loading states and error handling
- Clean, responsive design with CSS Modules
- Full TypeScript support with strict type checking

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TMDB API token (get one at [https://developer.themoviedb.org/](https://developer.themoviedb.org/))

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd 03-react-movies
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Get your TMDB API token:**
   - Visit [https://developer.themoviedb.org/docs/authentication-application](https://developer.themoviedb.org/docs/authentication-application)
   - Sign up and create an API token
   - Copy your API token

4. **Create a `.env` file:**
   ```bash
   cp .env.example .env
   ```
   - Open `.env` and replace `your_tmdb_token_here` with your actual TMDB API token

## Development

Run the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Build

Build the application for production:

```bash
npm run build
```

## Linting

Check for code style and type errors:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ErrorMessage/   # Error message component
│   ├── Loader/         # Loading indicator
│   ├── MovieGrid/      # Movie grid display
│   ├── MovieModal/     # Movie details modal
│   └── SearchBar/      # Search form
├── services/           # API services
│   └── movieService.ts # TMDB API requests
├── types/              # TypeScript types
│   └── movie.ts        # Movie interface
├── App.tsx            # Main App component
├── App.css            # App styles
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Toast notifications
- **CSS Modules** - Scoped styling
- **modern-normalize** - CSS reset
- **ESLint** - Code linting
- **Prettier** - Code formatting

## API

This project uses the [TMDB API](https://developer.themoviedb.org/) to fetch movie data.

## License

This project is open source and available under the MIT License.
