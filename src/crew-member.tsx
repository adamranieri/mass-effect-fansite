
//Component Functions are just like regular functions
// they can take input to return different jsx
// you pass in your input as a single parameter called props
// it should be a single object
type CremateProps = {
    name: string,
    species:string, 
    homeplanet:string, 
    specialty:string
}

const headingStyle: React.CSSProperties ={
    color:"red"
}

export function CrewmateInfo(props: CremateProps){

    return <>
        <h1 style={headingStyle}>{props.name}</h1>
        <table>
            <thead>
                <tr><th>Species</th><th>Homeplanet</th><th>Specialty</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.species}</td>
                    <td>{props.homeplanet}</td>
                    <td>{props.specialty}</td>
                </tr>
            </tbody>
        </table>
    </>
}