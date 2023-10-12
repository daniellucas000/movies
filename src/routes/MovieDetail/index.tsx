/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import {
  GenresContainer,
  MovieDetailContainer,
  MovieInfoContainer,
  MovieInfoWrapper,
  RatingWrapper,
  TrailerBtnContainer,
} from './styled';
import { useParams } from 'react-router-dom';
import { IMovie } from '../../Context/MovieContext';
import { MovieTrailer } from '../../Components/MovieTrailer';
import * as Dialog from '@radix-ui/react-dialog';

const apiKey = 'dcb845378df1cb3a72281e31506c432a';

export function MovieDetail() {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = useParams();

  async function fetchMovie(id: string | undefined) {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
    );

    const movie = await data.json();
    setMovie(movie);
  }

  useEffect(() => {
    fetchMovie(id);
  }, []);

  return (
    <MovieDetailContainer>
      <div>
        <img
          src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path}
          alt=""
        />
      </div>
      <MovieInfoContainer>
        <h1>{movie?.title}</h1>
        <h2>{movie?.tagline}</h2>
        <RatingWrapper>
          <p>{movie?.vote_average}</p>
        </RatingWrapper>

        <MovieInfoWrapper>
          <div>
            <span>Duração</span>
            <p>{movie?.runtime}</p>
          </div>

          <div>
            <span>Linguagens</span>
            <div>
              {movie?.spoken_languages.map((movie, i) => (
                <p key={i}>{movie.name}</p>
              ))}
            </div>
          </div>

          <div>
            <span>Ano</span>
            <p>{movie?.release_date}</p>
          </div>

          <div>
            <span>Status</span>
            <p>{movie?.status}</p>
          </div>
        </MovieInfoWrapper>

        <div>
          <span>Genêro</span>
          <GenresContainer>
            {movie?.genres.map((movie, i) => (
              <span key={i}>{movie.name}</span>
            ))}
          </GenresContainer>
        </div>

        <p>{movie?.overview}</p>

        <TrailerBtnContainer>
          <Dialog.Root>
            <Dialog.Trigger>Assista ao trailer</Dialog.Trigger>

            <MovieTrailer movieId={movie?.id} />
          </Dialog.Root>
        </TrailerBtnContainer>
      </MovieInfoContainer>
    </MovieDetailContainer>
  );
}
