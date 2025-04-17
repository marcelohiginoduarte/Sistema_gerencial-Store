import Carrinho from "../Carrinho/Carrinho";
import Cliente_venda from "../Cliente_venda/Cliente_venda";
import Incluir_produto from "../Incluir_produto/Incluir_produto";
import "./Vendas.css"

function Vendas () {
    return (
        <div style={{ textAlign: "left" }}>
        <h2>Vendas</h2>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
            <Cliente_venda />
            <Incluir_produto />
            </div>
            <div>
            <Carrinho itens={[]} />
            </div>
        </div>
        </div>
        
    )
};

export default Vendas;