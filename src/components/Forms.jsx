import React from "react-dom";

export default function Forms({ handleSubmit }) {
  return (
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
      <input name="rating" type="number" placeholder="Movie rating" required />
      <button type="submit">Add movie</button>
    </form>
  );
}
