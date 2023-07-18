import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const navigate = useNavigate();
  return (
    <section className="movie_list">
      {props.movies.map((movie) => (
        <MovieCard
          key={movie.id}
          {...movie}
          handleClick={() => {
            console.log(movie.id);
            navigate(`/movie-list/${movie.id}`);
          }}
        />
      ))}
    </section>
  );
}
