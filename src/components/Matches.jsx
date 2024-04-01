import {organizarPartidos } from "../helpers/CreateMatches";

export const Matches = (  { couples, time } ) => {

    const rounds = organizarPartidos(couples);
   // console.log("rondas", rounds);
    
    const warmingUpTime = 5;
    const roundsNumber = rounds.length;
    let timeOnCourt = (time - warmingUpTime) ;

    return (
    <>
        <h3>Partidos</h3>
        <h4>{ roundsNumber } Rondas. { couples.length/2 } Canchas.</h4>
        <h5>{ (Math.floor(timeOnCourt/roundsNumber)) } minutos por partido y { 5 }min. de calentamiento.</h5>
        {
            rounds.map((r, index) => (
                <p key={index}>{r}</p>
            ))
        }
    </>); 
}