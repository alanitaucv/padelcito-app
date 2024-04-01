import {organizarPartidos } from "../helpers/CreateMatches";
import { RegisterResults } from "./RegisterResults";

export const Matches = (  { couples, time } ) => {

    const matches = organizarPartidos(couples);
   // console.log("matches", matches);
    
    const warmingUpTime = 5;
    const roundsNumber = matches.length ;
    let timeOnCourt = (time - warmingUpTime) ;
    const courts = couples.length / 2;

    return (
    <>
        <h3>Partidos y Resultados</h3>
        <h4>{ roundsNumber } Ronda(s). { courts } Cancha(s).</h4>
        <h5>{ (Math.floor(timeOnCourt/roundsNumber)) } minutos por partido y { 5 }min. de calentamiento para el primer partido.</h5>
        <RegisterResults matches={ matches } courts={courts}/>
    </>); 
}