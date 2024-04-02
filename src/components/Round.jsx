import { Match } from "./Match";

export const Round = ({numRound, round}) => {

    let cancha = 0;

    return (
        <>
            <div>Ingresa los resultados de cada ronda</div>
            {
                round.map((match, j) => {
                    cancha = j + 1;
                    let key = "round"+ numRound + "cancha"+ cancha;  
                    <Match key ={key} round={numRound} cancha={cancha} couple1={match[0].players} couple2={match[1].players} />
                })
            }
        </>
    )
}
