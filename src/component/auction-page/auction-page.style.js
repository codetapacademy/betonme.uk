import styled from "styled-components";

export const AuctionPageBackground = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  padding: 30px 300px;
`;

export const AuctionCard = styled.div`
  grid-column: span 8;
  padding: 20px;
`;

export const RightContainer = styled.div`
  grid-column: span 4;
`;

export const AuctionTitle = styled.h2`
  color: ${({ theme }) => theme.color.darker};
  font-size: 2rem;
`;

export const StyledImage = styled.img`
  border: 1px solid ${({ theme }) => theme.color.lighter};
  width: 100%;
  height: auto;
`;

export const DescripitonTitle = styled.h2`
  color: ${({ theme }) => theme.color.darker};
  font-size: 1.5rem;
  font-weight: 600;
`;

export const DescriptionContent = styled.p`
  border: 1px solid ${({ theme }) => theme.color.lighter};
  color: ${({ theme }) => theme.color.darker};
  background-color: #fff;
  padding: 20px;
  font-size: 1rem;
`;

export const WhiteContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.color.lighter};
  
  &:first-of-type {
    margin-bottom: 30px;
  }

  &:last-of-type {
    padding: 20px;
  }
`;

export const RemainingTime = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.color.darker};
  font-size: 1rem;
`;

export const StartingPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color.darker};
`

export const CurrentPrice = styled.p`
  color: ${({ theme }) => theme.color.darker};
  font-weight: 700;
`

export const TextIfLoggedOut = styled.p`
  color: ${({ theme }) => theme.color.darker};
  font-weight: 700;
`

export const StyledLink = styled.p`
  color: ${({ theme }) => theme.color.secondary};
  display: inline-block;
`

export const LogInButton = styled.button`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.secondary};
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
`

export const RegisterButton = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
`

export const BitButton = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.main};
  border-radius: 5px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
`
