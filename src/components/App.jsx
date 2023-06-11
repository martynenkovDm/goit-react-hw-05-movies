import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './navigation/Navigation';
import { AppBox, GlobalStyle } from 'components/GlobalStyles';
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage'));
const MovieDetail = lazy(() => import('pages/MovieDetail/MovieDetail'));
const Cast = lazy(() => import('components/cast/Cast'));
const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <AppBox>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetail />}>
            <Route path="cast/" element={<Cast />}></Route>
            <Route path="reviews/" element={<Reviews />}></Route>
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </AppBox>
  );
};
