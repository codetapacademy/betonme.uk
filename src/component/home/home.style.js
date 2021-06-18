import styled from 'styled-components'
import BackgroundPoster from '../../asset/images/poster.jpg'

export const HomeContainer = styled.div`
  margin-top: 10vh;
`

export const Poster = styled.div`
  width: 100vw;
  padding: 100px 50px;
  background-image: url(${BackgroundPoster});
  background-size: cover;
  background-position: right center;
`

export const PosterContent = styled.div`
  text-align: center;
`

export const PosterText = styled.h2`
  font-size: 36px;
  color: #ffd613;
  text-shadow: 2px 2px #000;
`

export const PosterButton = styled.button`
  background-color: #000;
  color: #ffd613;
  font-weight: bold;
  border: none;
  padding: 10px 30px;
  border-radius: 6px;
`

export const ActionSectionTitle = styled.div`
    background-color: #f3f6fd;
    font-size: 36px;
    color: #777777;
    padding: 50px;
`

export const ActionSectionTitleSpan = styled.span`
  font-weight: bold;
  color: black;
`

export const ActionSection = styled.div`
  background-color: #f3f6fd;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 100px 20px;
`
