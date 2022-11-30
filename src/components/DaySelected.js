import React, {useContext} from "react";
import { dataBase } from "../useContect";


function DaySelected(){
    const {allData ,data  ,dayToDisplay} = useContext(dataBase)
    const styles = {backgroundColor: "rgb(166, 38, 38)"}
    let style1 = {}
    let style2 = {}
    let style3 = {}
    const index = allData.indexOf(data)
    
    if(index === 0){
        style1 = styles
    } else if (index === 1) {
        style2 = styles
    } else if (index === 2) {
        style3 = styles
    }
    
    return(
        <div className="DaySelected__container">
            <p onClick={()=> dayToDisplay(0)} style={style1} className="DaySelected__el">Yesterday</p>
            <p onClick={()=> dayToDisplay(1)} style={style2} className="DaySelected__el">today</p>
            <p onClick={()=> dayToDisplay(2)} style={style3} className="DaySelected__el">tomorrow</p>
        </div>
    )
}

export default DaySelected