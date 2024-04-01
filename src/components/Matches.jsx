import {organizarPartidos } from "../helpers/CreateMatches";

export const Matches = (  { couples, time } ) => {

    const matches = organizarPartidos(couples);
   // console.log("matches", matches);
    
    const warmingUpTime = 5;
    const roundsNumber = matches.length;
    let timeOnCourt = (time - warmingUpTime) ;

    return (
    <>
        <h3>Partidos</h3>
        <h4>{ roundsNumber } Rondas. { couples.length/2 } Canchas.</h4>
        <h5>{ (Math.floor(timeOnCourt/roundsNumber)) } minutos por partido y { 5 }min. de calentamiento.</h5>
        {
            matches.map ( (round, i) => {
                const r = i + 1;
                let p = [];
                let cancha = 0;
                
                round.map((match, j) => {
                    cancha = j + 1;
                   // console.log("round "+ r + " cancha "+ cancha + " match: ", match[0].players + " vs "+ match[1].players);
                    let key = "round"+ r + "cancha"+ cancha; 
                    p = [... p , <p key={key}>{"Ronda "+r + " Cancha "+ cancha +" : " + match[0].players + " vs " + match[1].players}</p>]
                })
                
                return p;
            })
        } 
    </>); 
}