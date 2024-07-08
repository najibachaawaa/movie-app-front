import React, { useState } from "react";
import styled from "styled-components";
import { useMovieContext } from "../Contexts/MovieContext"; 

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.linkLight};
  border-radius:9px;
  padding: 8px 16px;
  width: 700px; 
  margin-top: 50px;
`;

const SearchInput = styled.input`
  flex: 1;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  outline: none;
  margin-left: 8px;
`;

const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 9px;
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
`;

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchMovies } = useMovieContext(); // Using the context hook to access searchMovies function

  const handleSearch = () => {
    // Call searchMovies from context to perform search
    searchMovies(searchTerm);
  };

  return (
    <SearchBarWrapper>
      <SearchInput
        type="text"
        placeholder="Search by movie title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;

