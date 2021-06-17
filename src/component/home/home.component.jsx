import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../config/firebase'
import { logheazaMaAction, scoateMaAction } from '../../store/user.action'
import { ActionCard } from '../action-card'
import * as HOS from './home.style'

export const Home = () => {

  const [name, setName] = useState('')
  const [nameList, setNameList] = useState([])

  const handleChange = (e) => {
    const {value} = e.target
    setName(value)
    console.log(value)
  }
//Snapchot for firebase with for each
  useEffect(
    () => {
      db.collection("hahahe").onSnapshot(snap => {
        let list = []

        snap.forEach((doc) => {
          list.push({
            id: doc.id,
            ...doc.data()
          })
        })
        setNameList(list)
      })
    },
    []
  )

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

  //Dispatch the action to the store(to the reducer)
  const logheazaMa = () => {
    //Pentru test vreau sa vad cum se schimba store vis a vis de isLoggedIn
    dispatch(logheazaMaAction())
  }

  const scoateMa = () => {
    //Pentru test vreau sa vad cum se schimba store vis a vis de isLoggedIn
    dispatch(scoateMaAction())
  }

  console.log(isLoggedIn)

  console.log(nameList)

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
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridGap: "10px"
      }}>
      {nameList.map(({anaaremere, id, name}) => (
        <>
          <div>{id}</div>
          <div>{name}</div>
          <div>{anaaremere ? "da" : "nu"}</div>
        </>
      ))}
      </div>
      <HOS.ActionSection>
        <ActionCard />
        <ActionCard />
        <ActionCard />
        <ActionCard />
      </HOS.ActionSection>

    </HOS.HomeContainer>
  )
}
