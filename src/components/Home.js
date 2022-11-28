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
                    <div className="home__match--teamImg-div">
                        <img src={el.imgTeam1} alt="img" className="home__match--teamImg" />
                    </div>
                    <p className="home__match--team-name">{el.team1}</p>
                </div>
                
                <div className="home__match-score__container">
                    <h4 className="home__match-score">{el.score}</h4><br />
                    <p className="home__match-score__state">{el.muchState}</p>
                </div>
                
                <div className="home__match-team">
                    <div className="home__match--teamImg-div">
                        <img src={el.imgTeam2} alt="img" className="home__match--teamImg" />
                    </div>
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