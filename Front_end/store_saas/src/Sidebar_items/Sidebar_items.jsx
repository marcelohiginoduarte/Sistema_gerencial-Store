import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar_items.css";

const SidebarItem = ({ titulo, subItems }) => {
    const [open, setOpen] = useState(false);

    const links = {
        "Vendas": "/vendas",
        "Abrircaixa": "/caixa",
        "Fechar caixa": "/fechar-caixa",
        "Histórico": "/caixa/historico",
        "Cadastrar": "/cliente/cadastrar",
        "Listar": "/cliente/listar",
        "Registrar troca": "/trocas/registrar",
        "Histórico de trocas": "/trocas/historico",
        "Produtos": "/estoque/produtos",
        "Entradas": "/estoque/entradas",
        "Saídas": "/estoque/saidas",
        "Alertas": "/estoque/alertas",
        "Financeiro": "/relatorios/financeiro",
        "Estoque": "/relatorios/estoque"
    };

    return (
        <li className="menu-item" onClick={() => setOpen(!open)}>
            <div>
                {titulo}
            </div>
            <span className="arrow">{open ? "▼" : "▶"}</span>

            {open && (
                <ul className="submenu">
                    {subItems.map((item, index) => (
                        <li key={index}>
                            {links[item] ? (
                                <Link
                                    to={links[item]}
                                    style={{ color: 'white', textDecoration: 'none' }}
                                >
                                    {item}
                                </Link>
                            ) : (
                                item
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default SidebarItem;

