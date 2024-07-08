import React, { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    return (
        <MovieContext.Provider value={{ movies, setMovies, selectedMovie, setSelectedMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieProvider };
