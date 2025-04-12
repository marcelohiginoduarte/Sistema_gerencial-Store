import React, { useState } from "react";
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
    // Aqui você pode adicionar lógica para salvar os dados alterados
    setIsEditing(false);
  };

  return (
    <div className="cliente-card">
      <img
        className="cliente-foto"
        src="https://via.placeholder.com/150"
        alt="Foto do cliente"
      />
      <div>
        {isEditing ? (
          <div>
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
