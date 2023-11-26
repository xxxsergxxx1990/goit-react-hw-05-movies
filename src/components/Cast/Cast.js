import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API/Api';

import s from './Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then(setMovieCast);
  }, [movieId]);
  if (!movieCast) {
    return;
  }
  return (
    <>
      <ul className={s.wrapper}>
        {movieCast.map(item => (
          <li key={item.id} className={s.item}>
            <img
              className={s.image}
              src={
                item.profile_path
                  ? `https://www.themoviedb.org/t/p/w500/${item.profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={item.original_name}
            />
            <h3>{item.name}</h3>
            <p>As: {item.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
