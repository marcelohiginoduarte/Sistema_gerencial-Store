import React, { useState } from "react";
import SidebarItem from "./Sidebar_items/Sidebar_items";
import "./Sidebar.css";

const Sidebar = () => {
    const [abrirsidebar, setAbrirsidebar] = useState(true);

    return (
        <div className="nav">
            <div className={`sidebar ${abrirsidebar ? "open" : "closed"}`}>
                <button className="toggle-button" onClick={() => setAbrirsidebar(!abrirsidebar)}>
                    {abrirsidebar ? "←" : "→"}
                </button>
                <ul className="menu">
                    <SidebarItem
                        titulo="Caixa"
                        subItems={["Vendas", "Abrir caixa", "Fechar caixa", "Histórico"]}
                    />
                    <SidebarItem
                        titulo="Cliente"
                        subItems={["Cadastrar", "Listar", "Histórico de compras"]}
                    />
                    <SidebarItem
                        titulo="Trocas"
                        subItems={["Registrar troca", "Histórico de trocas"]}
                    />
                    <SidebarItem
                        titulo="Estoque"
                        subItems={["Produtos", "Entradas", "Saídas", "Alertas"]}
                    />
                    <SidebarItem
                        titulo="Relatórios"
                        subItems={["Financeiro", "Vendas", "Estoque"]}
                    />
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

