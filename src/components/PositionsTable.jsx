
export const PositionsTable = ({ results }) => {
  return (
    <>
    <div>
        <h3> Tabla de posiciones </h3>
        <table>
            <thead>
                <tr>
                <th scope="col">Lugar</th>
                <th scope="col">Jugadores</th>
                <th scope="col">Puntos</th>
                </tr>
            </thead>
            <tbody>
            {
                results.map((team, index) =>{
                    return (
                        <tr key={team.id}>
                            <th scope="row"> { "#"+(index+1) }</th>
                            <td scope="row"> { team.players }</td>
                            <td scope="row"> { team.points }</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
    </div>
    </>
  )
}
