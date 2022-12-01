import React, { createContext, useState } from "react";
import {today, yesterday, tomorrow} from "./Database";


const dataBase = createContext('')


function Provider(props) {
    const [goalstoWatch, setGoalstoWatch] = useState('')
    const [displayMatchFor, setDisplayMatchFor] = useState(today)
    const allData = [yesterday, today, tomorrow]
    const [liveScoreData, setLiveScoreData] = useState([])


  function getId(id) {
      const infoFind = displayMatchFor.find(el => el.id === id)
      setGoalstoWatch(infoFind)
    }

  function dayToDisplay(day) {
    setDisplayMatchFor(allData[day])
  }


  var APIkey='a53f6863ed56d82e65de82c648ffb49f941976c7745dab2f6e5fb0a54c7b9f9e';

  var socket  = new WebSocket('wss://wss.allsportsapi.com/live_events?widgetKey='+APIkey+'&timezone=+03:00');
  socket.onmessage = function(e) {
    if (e.data) {
      var matchesData = JSON.parse(e.data);
      // Now variable matchesData contains all matches that received an update
      // Here can update matches in dom from variable matchesData
      setLiveScoreData(matchesData);
    }
  }
    
  console.log(liveScoreData)

    return (
        <dataBase.Provider value={{data:displayMatchFor, getId:getId, dayToDisplay:dayToDisplay, allData:allData, infoSelected:goalstoWatch, liveScoreData:liveScoreData}}>
            {props.children}
        </dataBase.Provider>
    )
}

export {Provider, dataBase}

