import React from "react-dom";
import { useParams, Link } from "react-router-dom";
import Movies from "../movies";

export default function DescriptionTrailer() {
  const { id } = useParams();
  console.log(useParams());
  const movie = Movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <h1>Movie not found</h1>;
  }

  const { title, description, trailerLink } = movie;
  console.log(title, description, trailerLink);
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <iframe
        width="560"
        height="315"
        src={trailerLink}
        title={title}
        frameborder="0"
        allowfullscreen
      ></iframe>
      <Link to="/movie-list">Go Back</Link>
    </div>
  );
}
