import { Match } from "./Match";

export const Round = ({numRound, round}) => {

    let cancha = 0;

    return (
        <>
            <h4>{"Ronda "+numRound}</h4>
            {
                round.map((match, j) => {
                    cancha = j + 1;
                    let key = "round"+ numRound + "cancha"+ cancha;  
                    return  (<Match className="centerMatch" key ={key} round={numRound} cancha={cancha} couple1={match[0].players} couple2={match[1].players} />);
                })
            }
            <hr></hr>
        </>
    )
}
