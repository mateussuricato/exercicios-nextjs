import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"
import { mega } from "../../functions/mega"

export default function megasena () {

    const [ numeros, setNumeros ] = useState(mega())

    function renderNumeros() {
        return numeros.map(n => <ContadorDisplay key={n} numero={1}/>)
    }

    return (
        <div>
            <h1>Mega Sena</h1>
            <div>
                {renderNumeros()}
            </div>
        </div>
    )
}