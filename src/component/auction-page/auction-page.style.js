import styled from "styled-components";

export const AuctionPageBackground = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px;
  padding: 30px 120px;
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
`;

export const RemainingTime = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.color.darker};
  font-size: 1rem;
`;
