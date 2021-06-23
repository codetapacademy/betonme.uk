import styled from 'styled-components'
import AuctionsImage from '../../asset/images/bet.jpg'

export const AuctionsSection = styled.div`
  background-color: ${({ theme }) => theme.color.lighter};
`

export const FirstImage = styled.div`
  height: 40vh;
  width: 100%;
  background-image: url(${AuctionsImage});
  background-position: center;
  background-size: cover;
`

export const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.color.darker};
  font-size: 36px;
  text-align: center;
  padding: 20px;
`

export const StyledDivider = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  height: 5px;
  width: 100px;
  margin: 0px auto;
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px;
  grid-gap: 20px;
`
