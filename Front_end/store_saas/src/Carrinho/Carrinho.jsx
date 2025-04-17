import React from "react";
import './Carrinho.css';

function Carrinho({itens}) {
    return (
        <div className="carrinho-container">
            <h3 className="carrinho-titulo" >Carrinho de produtos</h3>
            {itens.length === 0 ? (
                <p className="carrinho-vazio">Nenhum produto adicionado.</p>
            ) : (
                <ul className="carrinho-lista">
                    {itens.map((item, index) =>(
                        <li key={index} className="carrinho-item">
                            <strong>{item.nome}</strong> - {item.quantidade} - unidades(s)
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Carrinho;