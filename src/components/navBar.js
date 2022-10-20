import React from "react";



const Header = () => {
    
    const toggleMenuOpen = () => {
        document.body.classList.toggle("open");
        console.log("open")
    }
    


    return (
        <header>
            <nav className="navbar">
                <div className="navbar-overlay" onclick={toggleMenuOpen()}>
                </div>
                <button type="button" className="navbar-burger" onclick={toggleMenuOpen()}>
                    <span class="material-icons" >
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