import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav>
            <div>
                <div>Gerador de Nomes</div>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg viewBox="0 0 24 24">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <div>
                        <Link to="/adicionar-nome">Adicionar Nome</Link>
                        <Link to="/adicionar-apelido">Adicionar Apelido</Link>
                        <Link to="/gerar-nomes">Gerar Nomes</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
