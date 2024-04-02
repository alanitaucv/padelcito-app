
import { Match } from "./Match";

export const RegisterResults = ({ matches, courts }) => {

    return (
        <>
        <div>Ingresa los resultados de cada ronda</div>
        {
            matches.map ( (round, i) => {
                const r = i + 1;
                let cancha = 0;
                let p = [];
                round.map((match, j) => {
                    cancha = j + 1;
                    let key = "round"+ r + "cancha"+ cancha; 
                    p = [...p , 
                        <Match key ={key} round={r} cancha={cancha} couple1={match[0].players} couple2={match[1].players} />
                    ];
                })
                return p;
            })
        } 
    </>
)
}
