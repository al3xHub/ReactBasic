export function Nombre() {
    const name = {
        firstname: "Alejandro",
        lastname: "Bueno",
    }
    return (<div>
        <h1>Mi nombre es {name.firstname} con apellido {name.lastname}.</h1>
    </div>)
}