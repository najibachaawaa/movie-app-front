// filmDetailsPage.js

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.2);


`;

const FilmImage = styled.img`
  width: 450px;
  height: 250px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const DetailsSection = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.secondary};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  // height: 700px;

  h2 {
    color: ${({ theme }) => theme.primary};
    margin-bottom: 10px;
  }

  p {
    color: ${({ theme }) => theme.info};
    font-weight: normal;
    margin-bottom: 5px;

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.secondaryDarker};
    }
  }
`;

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchfilmDetails = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=25fdf932`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching film details:", error);
      }
    };

    fetchfilmDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
const {Poster,Title,Year,Rated,Director}=movie
  return (
    <Wrapper>
      {" "}
      <DetailsWrapper>
        <h2>{Title}</h2>
        <FilmImage src={Poster} alt={movie.Title} />
        <DetailsSection>
          <p>
            <span>Year:</span> {Year}
          </p>
          <p>
            <span>Rated:</span> {Rated}
          </p>
          <p>
            <span>Director:</span> {Director}
          </p>
          <p>
            <span>Plot:</span> {movie.Plot}
          </p>
          {/* Add more details as needed */}
        </DetailsSection>
      </DetailsWrapper>
    </Wrapper>
  );
};

export default DetailPage;
