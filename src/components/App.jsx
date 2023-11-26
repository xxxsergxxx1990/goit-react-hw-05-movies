import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



const Layout = lazy(() => import('components/Layout/Layout'));
const Home = lazy(() => import('Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
export const App = () => {
  return (
<Suspense fallback = 'Please wait.'>

<Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

</Suspense>
  );
};