import { Match } from "./Match";

export const Round = ({numRound, round}) => {

    let cancha = 0;

    return (
        <>
            <h3 className="blue">{"Ronda "+numRound}</h3>
            {
                round.map((couple, j) => {
                    cancha = j + 1;
                    let key = "round"+ numRound + "cancha"+ cancha;  
                    return  (<Match className="centerMatch" key ={key} round={numRound} cancha={cancha} couple1={couple[0]} couple2={couple[1]} />);
                })
            }
            <hr></hr>
        </>
    )
}
