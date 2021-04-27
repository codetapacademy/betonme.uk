import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logheazaMaAction, scoateMaAction } from '../../store/user.action'
import * as HOS from './home.style'

export const Home = () => {

  const dispatch = useDispatch()

  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)

  const logheazaMa = () => {
    //Pentru test vreau sa vad cum se schimba store vis a vis de isLoggedIn
    dispatch(logheazaMaAction())
  }

  const scoateMa = () => {
    //Pentru test vreau sa vad cum se schimba store vis a vis de isLoggedIn
    dispatch(scoateMaAction())
  }

  console.log(isLoggedIn)

  return(
    <HOS.HomeContainer>
      <HOS.Poster>
        <HOS.PosterContent>
          <HOS.PosterText>
          The best place to buy and sell!
          </HOS.PosterText>
          {!isLoggedIn && <HOS.PosterButton onClick={logheazaMa}>Register</HOS.PosterButton>}
          {isLoggedIn && <HOS.PosterButton onClick={scoateMa}>LogOUT</HOS.PosterButton>}
        </HOS.PosterContent>
      </HOS.Poster>
    </HOS.HomeContainer>
  )
}
