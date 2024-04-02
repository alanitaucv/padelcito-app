import { Round } from "./Round";

export const RegisterResults = ({ matches, courts }) => {

    return (
        <>
        <div>Ingresa los resultados de cada ronda</div>
        <hr></hr>
        {
            matches.map ( (round, i) => {
                let r = i + 1;
                return (
                    <Round key={r} numRound={r} round={round}/>
                )
            })
        } 
    </>
)
}
