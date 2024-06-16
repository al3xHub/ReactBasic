export function Saludar() {
    const chico = true

    // if(chico){
    //     return <h1>Soy un chico</h1>
    // }else{
    //     return <h1>Soy una chica</h1>
    // }

    // Esto es lo mismo que el bloque if else de arriba "?" = if ":" = else.
    return (<h1>Y {chico ? 'soy un chico' : 'soy una chica'}.</h1>)
}