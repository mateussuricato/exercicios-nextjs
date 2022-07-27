export default function botao() {
  function acao1() {
    console.log("acao1");
  }

  return (
    <div>
      <button onClick={acao1}>Click</button>
      <button
        onClick={function () {
          console.log("acao2");
        }}
      >
        Click 2
      </button>
      <button onClick={() => console.log("acao3")}>Click 3</button>
      <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </div>
  );
}
