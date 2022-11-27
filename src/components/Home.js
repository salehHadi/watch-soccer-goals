import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import Header from "./Header";
import { dataBase } from "../useContect";





function Home() {

const {data, getId} = useContext(dataBase)
        


const displayElement = data.map(el => {
    return(
        <Link to="/watch" key={el.id} className="home__match--link" >
            <div key={el.id} onClick={()=> getId(el.id)} className="home__match">
                <div className="home__match-team">
                    <img src={el.imgTeam1} className="home__match--teamImg" />
                    <p className="home__match--team-name">{el.team1}</p>
                </div>
                
                <div>
                    <h4>{el.score}</h4><br />
                    <p>{el.muchState}</p>
                </div>
                
                <div className="home__match-team">
                    <img src={el.imgTeam2} className="home__match--teamImg" />
                    <p className="home__match--team-name">{el.team2}</p>
                </div>
            </div>
        </Link>
    )
})


return(

    <div>

        <Header />

        <div className="home__body">
            <div className="home__match-container">
                {displayElement}
            </div>
        </div>
    </div>
)
}

export default Home