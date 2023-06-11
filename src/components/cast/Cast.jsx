import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItem,
  PosterMovie,
  CastWrap,
  CastSubWrap,
  CastText,
  CastTitle,
} from './Cast.styled';
import { getMoviesCast } from 'services/movieAPI';

function Cast() {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      async function fetchMovieCasts() {
        const result = await getMoviesCast(movieId);
        setCasts(result);
      }
      fetchMovieCasts();
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <CastWrap>
      <CastList>
        {casts.map(cast => {
          return (
            <CastItem key={cast.id}>
              <PosterMovie
                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                alt={`${cast.name} portrait`}
                width="100"
              />
              <CastSubWrap>
                <CastTitle>Name: {cast.name}</CastTitle>
                <CastText>Character: {cast.character}</CastText>
              </CastSubWrap>
            </CastItem>
          );
        })}
      </CastList>
    </CastWrap>
  );
}
export default Cast;
