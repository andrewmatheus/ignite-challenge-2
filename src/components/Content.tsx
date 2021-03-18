import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface MovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{ 
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  dataMovies: MovieProps[];
}

export function Content({ dataMovies }: ContentProps) {
  return (
    <main>
      <div className="movies-list">
        {dataMovies.map(movie => (
          <MovieCard 
            key={movie.Title}
            title={movie.Title} 
            poster={movie.Poster} 
            runtime={movie.Runtime} 
            rating={movie.Ratings[0].Value} 
          />
        ))}
      </div>
    </main>
  )
}