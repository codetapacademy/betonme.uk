import React from 'react'
import * as HOS from './home.style'

export const Home = () => {

  return(
    <HOS.HomeContainer>
      <HOS.Poster>
        <HOS.PosterContent>
          <HOS.PosterText>
          The best place to buy and sell!
          </HOS.PosterText>
          <HOS.PosterButton>Register</HOS.PosterButton>
        </HOS.PosterContent>
      </HOS.Poster>
    </HOS.HomeContainer>
  )
}
