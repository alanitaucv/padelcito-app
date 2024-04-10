import { useState } from "react"
import { RegisterCouples } from "./RegisterCouples"
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export const AddCouples = () => {

    const minCouples = 2;
    const [couples , setCouples] = useState(minCouples);
    const [time, setTime] = useState(90);
    const [isVisible, setIsVisible] = useState(false); 

    const onAddCouples = () => setIsVisible(true);
    const onCouplesChange = (event) => setCouples(event.target.value);     
    const onTimeChange = (event) => setTime(event.target.value);

    const onResetCouples = () => {
        setIsVisible(false);
        setCouples(minCouples);
        setTime(90);
    }

    return (
        <>
            <Tabs defaultValue="parejas" className="w-[1200px]">
            <TabsList>
                <TabsTrigger value="parejas">Parejas y tiempo</TabsTrigger>
                {isVisible && <TabsTrigger value="nombres">Nombres Parejas</TabsTrigger>}
            </TabsList>
            <TabsContent value="parejas">
                {/* <h3>Agrega la cantidad de parejas y el tiempo en cancha</h3> */}
                 <p>¿Cúantas parejas?</p>
                <input id="couples" 
                    type="number" 
                    min={minCouples} 
                    placeholder={"Minimo "+ minCouples}
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
                <div className="px-10">
                    <Button onClick={ onResetCouples }> Reset </Button>
            
                    <Button onClick={ onAddCouples }> Agregar parejas </Button>
                </div>
            </TabsContent>
            {
                isVisible && 
                <TabsContent value="nombres">
                    <RegisterCouples couples={ couples } time = { time }/>
                </TabsContent>
            }
            </Tabs>
            
        </>
    )

}