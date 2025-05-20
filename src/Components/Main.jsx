import React from 'react'; 
import gato from '../assets/gato.jpg'; 
 
function Main({data}) {  

    console.log(data);
    return (  
        <main style={{ padding: "20px" }}>  
            <h2>Contenido Principal</h2>  
            <p>Este es un ejemplo de contenido dentro del área principal. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores commodi fugit optio aut? Dignissimos nesciunt alias, molestiae aliquam quidem blanditiis culpa eius quae eaque! Ducimus voluptatem nisi debitis natus? Voluptatum!</p>
            <img src={gato}/>  
        </main>  
    );  
}  
export default Main;  