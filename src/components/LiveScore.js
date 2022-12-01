import React, {useContext} from "react";
import { dataBase } from "../useContect";
import Header from "./Header";

function LiveScore() {

    const {liveScoreData} = useContext(dataBase)

  const liveScoreEL = liveScoreData.map(el => {
    return (
        <div key={el.event_key} className="home__match">
                <div className="home__match-team">
                    <div className="home__match--teamImg-div">
                        <img src={el.country_logo} alt="img" className="home__match--teamImg" />
                    </div>
                    <p className="home__match--team-name">{el.event_home_team}</p>
                </div>
                
                <div className="home__match-score__container">
                    <h4 className="home__match-score">{el.event_final_result}</h4><br />
                    <p className="home__match-score__state">{el.event_status}</p>
                </div>
                
                <div className="home__match-team">
                    <div className="home__match--teamImg-div">
                        <img src={el.country_logo} alt="img" className="home__match--teamImg" />
                    </div>
                    <p className="home__match--team-name">{el.event_away_team}</p>
                </div>
            </div>
    )
  }) 

    return (
    <div>
        <Header />
        <div className="home__body">
        <div className="DaySelected__container">
            <p className="DaySelected__el">Live</p>
        </div>
            <div className="home__match-container">
                {liveScoreEL}
            </div>
        </div>
    </div>
    )
}

export default LiveScore