export default function MovieCard({
  title,
  description,
  rating,
  posterUrl,
  handleClick,
}) {
  return (
    <article className="movie_card" onClick={handleClick}>
      <section>
        <p>{title}</p>
        <p>{description}</p>
        <p>{rating}</p>
      </section>

      <div className="movie_poster_wrapper">
        <img src={posterUrl} alt={title} />
      </div>
    </article>
  );
}
