import { getMoviesDetails } from 'services/movieAPI';
import { useLocation, useNavigate, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import {
  MovieDetailWrapper,
  MovieDetailSubWrapper,
  StyledLink,
  StyledButton,
  MoreInfoLinks,
  PosterMovie,
  MovieDetailTitle,
  MovieDetailText,
  MovieDetailSubTitle,
  MoreInfoLinksItem,
} from './MovieDetail.styled';

function MovieDetail() {
  const [details, setDetails] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    try {
      async function fetchMovieDetail() {
        const result = await getMoviesDetails(params.movieId);
        setDetails(result);
      }
      fetchMovieDetail();
    } catch (error) {
      console.log(error);
    }
  }, [params]);
  const { poster_path, title, release_date, vote_average, overview, genres } =
    details;
  return (
    <>
      <StyledButton type="button" onClick={() => navigate(backLink)}>
        Go-back
      </StyledButton>
      <MovieDetailWrapper>
        {poster_path && (
          <PosterMovie
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
          />
        )}
        <MovieDetailSubWrapper>
          <MovieDetailTitle>
            {details && title} ({details && parseInt(release_date)})
          </MovieDetailTitle>
          <MovieDetailText>
            Userscore: {vote_average && vote_average}
          </MovieDetailText>
          <MovieDetailSubTitle>Overview</MovieDetailSubTitle>
          <MovieDetailText>{overview && overview}</MovieDetailText>
          <MovieDetailSubTitle>Genres</MovieDetailSubTitle>
          <MovieDetailText>
            {genres && genres.map(genre => genre.name).join(' & ')}
          </MovieDetailText>
          <MovieDetailSubWrapper>
            <MovieDetailSubTitle>See more</MovieDetailSubTitle>
            <MoreInfoLinks>
              <MoreInfoLinksItem>
                <StyledLink to="cast" state={{ from: location.state?.from }}>
                  Cast
                </StyledLink>
              </MoreInfoLinksItem>
              <MoreInfoLinksItem>
                <StyledLink to="reviews" state={{ from: location.state?.from }}>
                  Reviews
                </StyledLink>
              </MoreInfoLinksItem>
            </MoreInfoLinks>
          </MovieDetailSubWrapper>
        </MovieDetailSubWrapper>
      </MovieDetailWrapper>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieDetail;
