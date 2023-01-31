
type PlanetProps ={
    name: string,
    population: number,
    originSpecies: string
}

export function PlanetInfo(props: PlanetProps){
    const {name, population, originSpecies} = props; // really common in react 

    return <>

        <h4>{name}</h4>
        <dl>
            {population > 0 ? <>
                <dt>Population</dt>
                <dd>{population}</dd>

                <dt>Home of</dt>
                <dd>{originSpecies}</dd>
            </>: <p>Uninhabited</p>}

        </dl>
    </>

}