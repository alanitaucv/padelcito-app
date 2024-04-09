import { useState } from 'react';

export const Match = ({round, cancha, couple1, couple2}) => {
    
    const key = "r"+ round + "c"+ cancha+"-"; 
    const idP1 = couple1.id;
    const idP2 = couple2.id;
    const [gamesCouple1, setGamesCouple1] = useState(0);
    const [gamesCouple2, setGamesCouple2] = useState(0);

    const onInputChangeP1 = (event) => {
        setGamesCouple1(event.target.value);
    }
    const onInputChangeP2 = (event) => {
        setGamesCouple2(event.target.value);
    }

    return (
        <>
            <div className="center" key={key}>
                <h5>{ " Cancha "+ cancha }</h5>
                {/* { (Number(gamesCouple1) > Number(gamesCouple2)) && <span>Ganaste</span>} */}
                { couple1.players +" "}
                <input type="number" 
                    key={"p1#"+key+idP1}
                    id={ "id#p1"+key+idP1 } 
                    name = { "name#"+key+idP1}
                    className="result"
                    value={ gamesCouple1 }
                    onChange={ onInputChangeP1 }    
                    placeholder="0"
                    min="0"
                />
                {" vs "}
                <input type="number" 
                    key={"r#p2"+key+idP2}
                    id={ "id#p2"+key+idP2} 
                    name = { "name#"+key+idP2}
                    className="result"
                    value={ gamesCouple2 }
                    onChange={ onInputChangeP2 }    
                    placeholder="0"
                    min="0"
                />
                { " "+couple2.players}    
                {/* { (Number(gamesCouple1) < Number(gamesCouple2)) && <span>Ganaste</span>} */}
            </div>
        </>
    )
}
