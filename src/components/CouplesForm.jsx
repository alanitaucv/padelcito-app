import { useState } from "react"

export const CoupleForm = ({ id, title, name, players }) => {
    const [namesPlayers, setNamesPlayers] = useState(players);

    const onInputChange = (event) => {
        setNamesPlayers(event.target.value);
    }

    return (
        <>
            <div className="inputPlayer">
                <label className="labelPlayer" htmlFor={name}>{ title } </label>
                <input type="text" 
                    key={ name } 
                    id={ id } 
                    name = { name }
                    value={ namesPlayers }
                    onChange={ onInputChange }    
                    placeholder="Nombre 1 - Nombre 2"
                />
            </div>
        </>
    )
}