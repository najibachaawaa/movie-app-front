import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.linkLight};
  color: ${({ theme }) => theme.colors.primaryDark};
  height: 40px;
  padding: 8px 24px;
  border-radius: 6px;
  border: none;
  cursor: pointer;


`;

const Button = ({ onClick ,value}) => {
  return (
    <StyledButton  onClick={onClick}>
      {value}
    </StyledButton>
  );
};

export default Button;
