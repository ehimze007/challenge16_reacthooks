import "./App.css";
import MovieList from "./components/MovieList";
import movies from "./movies";

function App() {
  return (
    <div className="app">
      <aside>
        <h1>Add a new movie</h1>
        <form action="">
          <input type="text" placeholder="Movie title" />
          <textarea
            type="text"
            rows={5}
            placeholder="Movie description"
          ></textarea>
          <input type="text" placeholder="Movie poster url" />
          <input type="number" placeholder="Movie rating" />
          <button>Add movie</button>
        </form>
      </aside>
      <main>
        <form action="">
          <input type="text" placeholder="Search" />
        </form>

        <MovieList movies={movies} />
      </main>
    </div>
  );
}

export default App;
