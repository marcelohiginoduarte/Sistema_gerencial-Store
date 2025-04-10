import React, { useState } from "react";

const SidebarItem = ({ titulo, subItems = [] }) => {
    const [aberto, setAberto] = useState(false);

    const existeItems = subItems.length > 0;

    return (
        <>
            <li onClick={() => existeItems && setAberto(!aberto)} className="menu-item">
                {titulo}
                {existeItems && (
                    <span className="arrow">{aberto ? "▲" : "▼"}</span>
                )}
            </li>
            {existeItems && aberto && (
                <ul className="submenu">
                    {subItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default SidebarItem;
