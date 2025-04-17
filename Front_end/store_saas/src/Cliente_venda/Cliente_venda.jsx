import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import "./Cliente_venda.css";

function Cliente_venda() {
  const [isEditing, setIsEditing] = useState(false);
  const [cliente, setCliente] = useState({
    
    nome: "Nome do Cliente",
    telefone: "(00) 00000-0000",
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({ ...cliente, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="cliente-card">
      <FaUserAlt className="cliente-foto" size={150} />
      
      <div>
        {isEditing ? (
          <div>
            <h4>Pesquisar cliente</h4>
            <input
              type="text"
              name="nome"
              value={cliente.nome}
              onChange={handleInputChange}
              className="cliente-info-input"
            />
            <input
              type="text"
              name="telefone"
              value={cliente.telefone}
              onChange={handleInputChange}
              className="cliente-telefone-input"
            />
            <button onClick={handleSave}>Salvar</button>
          </div>
        ) : (
          <div>
            <div className="cliente-info">{cliente.nome}</div>
            <p className="cliente-telefone">Telefone: {cliente.telefone}</p>
          </div>
        )}
        <button onClick={handleEditClick}>
          {isEditing ? "Cancelar" : "Alterar Cliente"}
        </button>
      </div>
    </div>
  );
}

export default Cliente_venda;

