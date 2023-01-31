

export function CharacterList(){

    const characters: string[] = ["Admiral Anders", "The Illusive Man", "Asari Councilor", "Benezia"];

    const manualJSXlist = [<p>Section 1</p>, <p>Section 2</p>, <p>Section 3</p>];// you can directly interpolate arrays of JSX elements
    // into JSX and have them display


    return <ul>
            {characters.map(c => <li>{c}</li>)}
            {manualJSXlist}
        </ul>
    
    
}