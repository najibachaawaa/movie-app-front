import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import { useMovieContext } from "../Contexts/MovieContext";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  padding: 45px;
  ${({ theme }) => theme.devices.desktop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  ${({ theme }) => theme.devices.mobile} {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 40px;
  }
`;

function SearchPage() {
  const { movies, setMovies } = useMovieContext(); // Using the context hook to access movies and searchMovies function
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    // Fetch all movies initially
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "http://www.omdbapi.com/?apikey=25fdf932&s=all"
        ); // Adjust the API endpoint to fetch all movies
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

    fetchMovies();
  }, [setMovies]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CardsContainer>
      <SearchBar />
      <CardsWrapper>
        {" "}
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.Title}
              imageUrl={movie.Poster}
              description={movie.Plot}
              id={movie.imdbID}
              //isActive={/* Determine if this card is active */}
            />
          ))
        ) : (
          <p>No movies exist</p>
        )}
      </CardsWrapper>
    </CardsContainer>
  );
}

export default SearchPage;
