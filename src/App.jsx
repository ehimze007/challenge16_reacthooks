import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import moviesList from "./movies";

function App() {
  const [movies, setMovies] = useState(moviesList);
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const movie = {
      title: form.title.value,
      description: form.description.value,
      posterUrl: form.posterUrl.value,
      rating: parseInt(form.rating.value),
    };

    setMovies((prev) => [...prev, movie]);
  }

  function handleSearch(e) {
    e.preventDefault();
    const form = e.target;
    const searchKeyword = form.search.value;

    if (searchKeyword === "") {
      setShowSearch(false);
      return;
    }

    const filteredMovies = movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        movie.rating == searchKeyword
      );
    });

    setResults(() => filteredMovies);
    setShowSearch(true);
  }

  return (
    <div className="app">
      <aside>
        <h1>Add a new movie</h1>
        <form onSubmit={handleSubmit}>
          <input name="title" type="text" placeholder="Movie title" required />
          <textarea
            name="description"
            type="text"
            rows={5}
            placeholder="Movie description"
            required
          ></textarea>
          <input
            name="posterUrl"
            type="text"
            placeholder="Movie poster url"
            required
          />
          <input
            name="rating"
            type="number"
            placeholder="Movie rating"
            required
          />
          <button type="submit">Add movie</button>
        </form>
      </aside>

      <main>
        <form onSubmit={handleSearch}>
          <input name="search" type="text" placeholder="Search" />
        </form>

        {!showSearch && <MovieList movies={movies} />}
        {showSearch && <MovieList movies={results} />}
      </main>
    </div>
  );
}

export default App;
