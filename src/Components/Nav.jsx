import React from 'react';  


function Nav({countItem}) {  
    return (  
        <nav style={{ backgroundColor: "#c48106", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Inicio</a></li>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Acerca de</a></li>  
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Contacto</a></li> 
                <li><a href="#" style={{ color: "white", textDecoration: "none" }}>Carrito: {countItem}</a></li> 
            </ul>  
        </nav>  
    );  
}  


export default Nav; 