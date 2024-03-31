import { useState } from "react"
import { RegisterCouples } from "./RegisterCouples"

export const AddCouples = () => {

    const [couples , setCouples] = useState(2);
    const [time, setTime] = useState(90);
    const [isVisible, setIsVisible] = useState(false); 

    const onAddCouples = () => setIsVisible(true);
    const onCouplesChange = (event) => setCouples(event.target.value);     
    const onTimeChange = (event) => setTime(event.target.value);

    const onResetCouples = () => {
        setIsVisible(false);
        setCouples(2);
        setTime(90);
    }

    return (
        <>
            <div>
                <div>Modo de juego: Todos contra Todos</div>
                <p>¿Cúantas parejas?</p>
                <input id="couples" 
                    type="number" 
                    min="2" 
                    placeholder="Mínimo 2"
                    value = { couples }
                    onChange={ onCouplesChange }
                    step={2}
                />
                <p>¿Cúantos minutos?</p>
                <input id="time" 
                    type="number" 
                    placeholder="En minutos"
                    value = { time }
                    onChange={ onTimeChange }
                    step={ 30 }
                />
                <p></p>
                <button onClick={ onResetCouples }> Reset </button>
                <button onClick={ onAddCouples }> Agregar parejas </button>
                
            </div>
            {
                isVisible && (<RegisterCouples couples={ couples } time = { time }/>)
            }
            
        </>
    )

}