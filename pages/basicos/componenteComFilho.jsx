import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="item #20" />
                <Item conteudo="item #30" />
                <Item conteudo="item #40" />
            </Lista>
        </div>
    )
}