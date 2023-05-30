import MovieCard from "./MovieCard";

export default function MovieList(props) {
  return (
    <section className="movie_list">
      {props.movies.map((movie) => (
        <MovieCard key={movie.title} {...movie} />
      ))}
    </section>
  );
}
