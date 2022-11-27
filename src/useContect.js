import React, { createContext, useState } from "react";
import data from "./Database";


const dataBase = createContext('')



function Provider(props) {
    const [dataSelected, setDataSelected] = useState('')

  function getId(id) {
      const infoFind = data.find(el => el.id === id)
      setDataSelected(infoFind)
    }
    


    return (
        <dataBase.Provider value={{data:data, getId:getId, infoSelected:dataSelected}}>
            {props.children}
        </dataBase.Provider>
    )
}

export {Provider, dataBase}