import React, { useState } from 'react';
import './Incluir_produto.css';

const produtosMock = [
    { codigo: '001', nome: 'Cabo de Energia', descricao: 'Cabo de 10m para instalações elétricas' },
    { codigo: '002', nome: 'Luminária LED', descricao: 'Luminária de 20W para postes' },
    { codigo: '003', nome: 'Poste 4m', descricao: 'Poste de ferro galvanizado 4 metros' }
];

function Incluir_produto() {
    const [codigo, setCodigo] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [produto, setProduto] = useState(null);
    const [carrinho, setCarrinho] = useState([]);

    const buscarProduto = () => {
        const encontrado = produtosMock.find(p => p.codigo === codigo);
        if (encontrado) {
            setProduto(encontrado);
        } else {
            setProduto(null);
        }
    };

    const adicionarAoCarrinho = () => {
        if (produto && quantidade > 0) {
            setCarrinho([...carrinho, { ...produto, quantidade }]);
            setCodigo('');
            setQuantidade('');
            setProduto(null);
        }
    };

    return (
        <div className="incluir-produto-card">
            <h2 className="incluir-produto-titulo">Adicionar Produto</h2>
            <input
                className="incluir-produto-input"
                type="text"
                placeholder="Código do Produto"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
            />
            <input
                className="incluir-produto-input"
                type="number"
                placeholder="Quantidade"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
            />
            <button className="incluir-produto-botao" onClick={buscarProduto}>Buscar</button>

            {produto && (
                <div className="produto-info">
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <p>Quantidade: {quantidade}</p>
                    <button className="incluir-produto-botao" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
                </div>
            )}
        </div>
    );
}

export default Incluir_produto;
