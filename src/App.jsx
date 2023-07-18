import { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import moviesList from "./movies";
import Forms from "./components/Forms";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { Link, Routes, Route } from "react-router-dom";
import DescriptionTrailer from "./components/DescriptionTrailer";

function App() {
  const [movies, setMovies] = useState(moviesList);
  const [results, setResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movie-list">Movie List</Link>
        </li>
        <li>
          <Link to="/form">Forms</Link>
        </li>
      </ul>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/form"
            element={
              <div>
                <aside>
                  <h1>Add a new movie</h1>
                  <Forms handleSubmit={handleSubmit} />
                </aside>
              </div>
            }
          />
          <Route
            path="/movie-list"
            element={
              <main>
                <form onSubmit={handleSearch}>
                  <input name="search" type="text" placeholder="Search" />
                </form>

                {!showSearch && <MovieList movies={movies} />}
                {showSearch && <MovieList movies={results} />}
              </main>
            }
          />
          <Route path="/movie-list/:id" element={<DescriptionTrailer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(movies);

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
}

export default App;
