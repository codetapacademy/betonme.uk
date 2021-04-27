import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { logheazaMaAction, scoateMaAction } from '../../store/user.action'
import * as HOS from './home.style'

export const Home = () => {

  const [name, setName] = useState('')

  const handleChange = (e) => {
    const {value} = e.target
    setName(value)
    console.log(value)
  }

  const handlePress = e => {
    if (e.charCode === 13) {
      // Vreau sa il trimit la baza de date cand apas enter
      db.collection("hahahe").add({
        name,
        anaaremere: Math.random() - 0.5 > 0
      })
      // Vreau sa curat formularul
      setName("")
      e.target.focus()
    }
    console.log(e, Object.keys(e))
  }

  const dispatch = useDispatch()

  const isLoggedIn = useSelector(({ user }) => user.isLoggedIn)

  const smartRandom = () => {
    db.collection("haha").add({
      name: Math.random()-0.5>0 ? "Hihi" : "haHa",
      areanamere: !isLoggedIn
    })
  }

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
          <HOS.PosterButton onClick={smartRandom}>Add Random Data</HOS.PosterButton>
        </HOS.PosterContent>
      </HOS.Poster>
      <input type="text" value={name} onChange={handleChange} onKeyPress={handlePress}/>
    </HOS.HomeContainer>
  )
}
