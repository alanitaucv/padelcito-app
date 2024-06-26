import { useState } from "react";
import { CoupleForm } from "./CouplesForm";
import { Matches } from "./Matches";

export const RegisterCouples = ({ couples, time }) => {

    const [players, setPlayers] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    let partners = [];

    for (let i = 0; i < couples; i++){ 
        partners = [...partners, {
            id:  "pareja"+ i,
            title: "Pareja "+ (i+1),
            name: "pareja"+ i,
            players: '',
        }];
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        let counter = 0;
        let players = [];

        for (const name in formJson){
            counter++;
            players = [...players, {
                id: name,
                title: "Pareja "+ (counter),
                name: name,
                players: formJson[name],
            }];
        }
        
        setPlayers(players);
        setIsVisible(true);
    }

    return (
        <>
            <div className="container">
                <h3>Ingresa los nombres de las parejas</h3>
                <form onSubmit={ handlerSubmit } >
                    {
                        partners.map((partner) => ( 
                            <CoupleForm key={partner.id} { ...partner }/>
                        ))
                    }
                    <p></p>
                    <button className="primary" type="submit"> Organizar partidos </button> 
                </form>
            </div>
            
            {
                isVisible && 
                <div>
                    <Matches key="matchesPerRound" couples={players} time={time} />
                </div>
            }
        </>
    )
    
}