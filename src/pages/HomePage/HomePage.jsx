import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { MoviesList, MovieItem, Link } from './HomePage.styled';
import { getMovies } from 'services/movieAPI';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      async function fetchMovies() {
        const result = await getMovies();
        setMovies(result);
      }
      fetchMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MoviesList>
        {movies.map(movie => {
          return (
            <MovieItem key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </MovieItem>
          );
        })}
      </MoviesList>
    </Suspense>
  );
}
export default HomePage;
