// MovieContext.js

import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "25fdf932";
  const searchMovies = async (title) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search || []); // Assuming data.Search is an array of movies
      } else {
        setMovies([]); // Reset movies if no results found
        console.error("No results found");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]); // Reset movies on error
    }
  };

  const contextValue = {
    movies,
    setMovies,
    searchMovies,
    // Other context values as needed
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
