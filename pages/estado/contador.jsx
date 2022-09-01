import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador () {
    const [ contar, setContar ] = useState(0)

    const mais = () => setContar(contar + 1)
    const menos = () => setContar(contar - 1)

    return (
        <div>
            <ContadorDisplay numero={contar}/>
            <h1>contador</h1>
            <div>valor: {contar}</div>
            <button onClick={menos}>-</button>
            <button onClick={mais}>+</button>
        </div>
    )
}