import styled from "styled-components";
import AuctionsImage from "../../asset/images/bet.jpg";

export const AuctionsSection = styled.div`
  background-color: ${({ theme }) => theme.color.lighter};
`;

export const FirstImage = styled.div`
  height: 40vh;
  width: 100%;
  background-image: url(${AuctionsImage});
  background-position: center;
  background-size: cover;
`;

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.color.darker};
  font-size: 36px;
  text-align: center;
  padding: 20px;
`;

export const StyledDivider = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  height: 5px;
  width: 100px;
  margin: 0px auto;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px;
  grid-gap: 20px;
`;

export const StyledFilter = styled.div`
  grid-column: 4/-1;
  grid-row: 1/-1;
`;

export const FilterTitle = styled.p`
  color: ${({ theme }) => theme.color.darker};
  font-size: 24px;
  font-weight: 700;
`;

export const StyledOrderBy = styled.p`
  color: ${({ theme }) => theme.color.secondary};
  padding-left: 30px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
`;

export const ButtonB = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.secondary};
  color: ${({ theme }) => theme.color.main};
  font-weight: 500;
  font-size: 24px;
  margin-right: 10px;
`;
