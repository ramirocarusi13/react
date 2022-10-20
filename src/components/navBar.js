import React from "react";



const Header = () => {
    
    const toggleMenuOpen = () => {
        document.body.classList.toggle("open");
    }
    


    return (
        <header>
            <nav className="navbar">
                <div className="navbar-overlay" onClick={() => {toggleMenuOpen()}}>
                </div>
                <button  className="navbar-burger" onClick={() => {toggleMenuOpen()}}>
                    <span className="material-icons" >
                        menu
                    </span>
                </button>
                <h1 className="navbar-title">Ram</h1>
                <nav className="navbar-menu">
                    <button type="button">Nosotros</button>
                    <button type="button">Productos</button>
                    <button type="button">Maquinas</button>
                </nav>
            </nav>
            
        </header>
    )

}

export default Header