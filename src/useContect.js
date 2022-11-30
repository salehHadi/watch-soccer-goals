import React, { createContext, useState } from "react";
import {today, yesterday, tomorrow} from "./Database";


const dataBase = createContext('')



function Provider(props) {
    const [goalstoWatch, setGoalstoWatch] = useState('')
    const [displayMatchFor, setDisplayMatchFor] = useState(today)
    const allData = [yesterday, today, tomorrow]


  function getId(id) {
      const infoFind = displayMatchFor.find(el => el.id === id)
      setGoalstoWatch(infoFind)
    }

  function dayToDisplay(day) {
    setDisplayMatchFor(allData[day])
  }
    


    return (
        <dataBase.Provider value={{data:displayMatchFor, getId:getId, dayToDisplay:dayToDisplay, allData:allData, infoSelected:goalstoWatch}}>
            {props.children}
        </dataBase.Provider>
    )
}

export {Provider, dataBase}