import { useEffect, useState, Suspense } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  MoviesList,
  MovieItem,
  MovieLink,
} from './MoviePage.styled';
import { getMoviesByQuery } from 'services/movieAPI';

function MoviePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [status, setStatus] = useState('idle');
  const searchQuery = searchParams.get('q') ?? '';
  const location = useLocation();

  useEffect(() => {
    async function fetchMovieByQuery() {
      const result = await getMoviesByQuery(searchQuery);
      if (result.length === 0) {
        console.log('Nothing founded!!');
        return;
      }
      setStatus('loaded');
      setMovies(result);
    }
    if (!searchQuery) {
      return;
    }
    fetchMovieByQuery();
  }, [searchQuery]);

  const onHandleChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    setSearchParams(inputValue ? { q: inputValue } : {});
  };

  return (
    <>
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchInput
          type="text"
          autoComplete="off"
          autoFocus
          value={inputValue}
          placeholder="Input search query"
          onChange={onHandleChange}
        />
        <SearchButton type="submit">
          <span>Search</span>
        </SearchButton>
      </SearchForm>

      <Suspense fallback={<div>Loading...</div>}>
        {status === 'rejected' && <div>Nothing found!</div>}
        {status === 'loaded' && (
          <MoviesList>
            {movies.map(movie => (
              <MovieItem key={movie.id}>
                <MovieLink
                  to={`/movies/${movie.id.toString()}`}
                  state={{ from: location }}>
                  {movie.title}
                </MovieLink>
              </MovieItem>
            ))}
          </MoviesList>
        )}
      </Suspense>
    </>
  );
}
export default MoviePage;
