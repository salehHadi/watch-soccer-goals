import React, {useContext} from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { dataBase } from "../useContect";


function WatchPage(){
    const {infoSelected} = useContext(dataBase)
    return (
        <div>
            <Header />
            <div className="watch_container">
                <div className="ratio ratio-16x9">
                    <iframe src={infoSelected.goalsVedio} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}



export default WatchPage