import { useState } from "react";

export default function formulario() {
  const [valor, setValor] = useState("valor inicial");

  const alterar = () => setValor(valor + "!!!");

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={(e) => {setValor(e.target.value)}}
      />
      <button onClick={alterar}>alterar</button>
    </div>
  );
}
