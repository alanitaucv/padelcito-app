import { useState } from "react";
import { Round } from "./Round";
import { PositionsTable } from "./PositionsTable";

export const RegisterRounds = ({ matches, couples }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [results, setResults] = useState([]);

    let resultados = [];

    const handlerSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
    
        let results = new Set();

        for (const name in formJson){
            let id = (name.split('-'))[1];
            let points = 0;

            let c = couples.filter(couple => couple.id === id);

            for (const idP in formJson){
                if (idP.includes(id)) {
                    points=points + Number(formJson[idP]);
                }
            }

            resultados = [...resultados, {
                id, 
                points,
                title: c[0].title,
                players: c[0].players
            }];
        }

        const key = 'id';
        results = [...new Map(resultados.map(item => [item[key], item])).values()];

        results.sort((a,b) => {
            return b.points - a.points;
        });

        setResults(results);
        setIsVisible(true);
    }

    return (
        <>
        <hr></hr>
        <div>Ingresa los resultados de cada ronda</div>
        <hr></hr>
        <form onSubmit = { handlerSubmit }>
            {
                matches.map ( (round, i) => {
                    let r = i + 1;
                    return (
                        <Round key={r} numRound={r} round={round}/>
                    )
                })
            } 
            <button className="primary" type="submit"> Calcular Puntajes </button> 
        </form>
        {
            isVisible && <PositionsTable results={ results } />
        }
    </>
)
}
