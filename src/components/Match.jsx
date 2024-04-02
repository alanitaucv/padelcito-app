import { useState } from 'react';

export const Match = ({round, cancha, couple1, couple2}) => {
    
    const key = "round"+ round + "cancha"+ cancha; 

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
                { couple1 +" "}
                <input type="number" 
                    key={"r#p1"+key}
                    id={ "id#p1"+key } 
                    name = { "name#"+key }
                    className="result"
                    value={ gamesCouple1 }
                    onChange={ onInputChangeP1 }    
                    placeholder="0"
                    min="0"
                />
                {" vs "}
                <input type="number" 
                    key={"r#p2"+key}
                    id={ "id#p2"+key } 
                    name = { "name#"+key }
                    className="result"
                    value={ gamesCouple2 }
                    onChange={ onInputChangeP2 }    
                    placeholder="0"
                    min="0"
                />
                { " "+couple2}    
            </div>
        </>
    )
}
