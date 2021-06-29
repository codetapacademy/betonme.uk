import styled from 'styled-components'

export const AuctionPageBackground = styled.div`
  background-color: ${({ theme }) => theme.color.light};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 30px 120px;
`

export const AuctionCard = styled.div`
  background-color: #fff;
  grid-column: span 8;
`

export const RightContainer = styled.div`
  grid-column: span 4;
`

export const AuctionTitle = styled.h2`
  color: ${({ theme }) => theme.color.darker};
  font-size: 2rem;
  padding: 30px;
`

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`

export const DescripitonTitle = styled.h2`
  color: ${({ theme }) => theme.color.darker};
  font-size: 1.5rem;
  font-weight: 600;
  padding-left: 30px;
`

export const DescriptionContent = styled.p`
  color: ${({ theme }) => theme.color.darker};
  font-size: 1rem;
  padding: 30px;
`

export const RemainingTime = styled.p`
  padding: 50px;
  background-color: #fff;
  color: ${({ theme }) => theme.color.darker}
`
