import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  width: 420px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0px 6px 17px 0px rgba(0, 0, 0, 0.2);
  padding: 0px 0px 32px 0px;
  overflow: hidden;
  height: 350px;
  margin: 10px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.2rem;
`;

const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.pinkLight};
  font-size: 1rem;
  margin-top: 8px;
`;

const Card = ({ title, imageUrl, description, id }) => {
  return (
    <CardWrapper>
      <CardImage src={imageUrl} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <Link to={`/movie/${id}`}>
          <Button value="see details">View Details</Button>
        </Link>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
