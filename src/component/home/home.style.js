import styled from "styled-components";
import BackgroundPoster from "../../asset/images/poster.jpg";
import { Link } from "@reach/router";

export const HomeContainer = styled.div`
  /* margin-top: 10vh; */
`;

export const Poster = styled.div`
  width: 100vw;
  padding: 100px 50px;
  background-image: url(${BackgroundPoster});
  background-size: cover;
  background-position: right center;
`;

export const PosterContent = styled.div`
  text-align: center;
`;

export const PosterText = styled.h2`
  font-size: 36px;
  color: #ffd613;
  text-shadow: 2px 2px #000;
`;

export const PosterButton = styled.button`
  background-color: #000;
  color: #ffd613;
  font-weight: bold;
  border: none;
  padding: 10px 30px;
  border-radius: 6px;
`;

export const ActionSectionTitle = styled.div`
  background-color: #f3f6fd;
  font-size: 36px;
  color: ${({ theme }) => theme.color.dark};
  padding: 50px 0 0 10px;
`;

export const ActionSectionTitleSpan = styled.span`
  font-weight: bold;
  color: black;
  padding-right: 10px;
`;

export const ActionSection = styled.div`
  background-color: #f3f6fd;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 100px 20px;
`;

export const ViewAllButton = styled(Link)`
  background-color: ${({ theme }) => theme.color.main};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: bold;
  font-size: 24px;
  border: none;
  padding: 10px 30px;
  border-radius: 6px;
  text-decoration: none;
`;

export const ContainerAllColumns = styled.div`
  grid-column: 1/-1;
`;

export const HowItWorksTitle = styled.p`
  font-size: 36px;
  color: ${({ theme }) => theme.color.dark};
  padding: 50px 0 0 10px;
`;

export const HowItWorksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 100px;
  padding: 50px;
`;

export const HowItWorksCard = styled.div``;

export const HowItWorksCircle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.dark};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

export const HowCardTitle = styled.p`
  color: ${({ theme }) => theme.color.darker};
  padding: 10px;
  font-size: 24px;
  border-bottom: 2px solid ${({ theme }) => theme.color.main};
  text-align: center;
`;

export const HowCardText = styled.p`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
`;
