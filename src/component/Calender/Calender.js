import React from 'react';
import './Calender.css';

function Calender(){
    return(
        <div className="calender">
            <div className="day">
                SEN
                <div className="date">10</div>
            </div>
            <div className="day">
                SEL
                <div className="date">11</div>
            </div>
            <div className="day">
                RAB
                <div className="date">12</div>
            </div>
            <div className="day active">
                KAM
                <div className="date">13</div>
            </div>
            <div className="day">
                JUM
                <div className="date">14</div>
            </div>
            <div className="day">
                SAB
                <div className="date">15</div>
            </div>
            <div className="day">
                MIN
                <div className="date">16</div>
            </div>
        </div>
    );
}

export default Calender;