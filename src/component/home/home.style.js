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
