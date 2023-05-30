export default function MovieCard(props) {
  return (
    <article className="movie_card">
      <section>
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.rating}</p>
      </section>

      <div className="movie_poster_wrapper">
        <img src={props.posterUrl} alt={props.title} />
      </div>
    </article>
  );
}
