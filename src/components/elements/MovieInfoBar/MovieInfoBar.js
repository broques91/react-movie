import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons';
import { calcTime, convertMoney } from '../../../helpers.js';

import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
    return(
        <div className="rmdb-movieinfobar">
            <div className="rmdb-movieinfobar-content">
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesomeIcon icon={faClock} className="fa-time" name="clock-o" size="2x" />
                    <span className="rmdb-movieinfobar-info">Durée : {calcTime(props.time)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesomeIcon icon={faCoins} className="fa-budget" name="money" size="2x" />
                    <span className="rmdb-movieinfobar-info">Budget : {convertMoney(props.budget)}</span>
                </div>
                <div className="rmdb-movieinfobar-content-col">
                    <FontAwesomeIcon icon={faTicketAlt} className="fa-budget" name="ticket" size="2x" />
                    <span className="rmdb-movieinfobar-info">Recette : {convertMoney(props.revenue)}</span>
                </div>
            </div>  
        </div>
    );
}

export default MovieInfoBar;