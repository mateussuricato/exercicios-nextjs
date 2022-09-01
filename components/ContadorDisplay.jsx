export default function ContadorDisplay({numero}) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItens: "center",
            height: "50px",
            width: "50px",
            borderRadius: "25px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "2rem",
            margin: "20px"
        }}>
            {numero}
        </div>
    )
}