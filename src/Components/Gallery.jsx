import React from 'react';  


function Gallery() {  
    const images = [  
        "../src/assets/gallery/blog-large.jpg",
        "../src/assets/gallery/blog-lg4.jpg",
        "../src/assets/gallery/Emma.png",   
        /*"https://placehold.co/400x400",
        "https://placehold.co/400x400",
        "https://placehold.co/400x400",   */
    ];  

    return (  
        <section style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "20px" }}> 
         
            {images.map((src, index) => (  
                <img key={index} src={src} alt={`imagen${index + 1}`} style={{ width: "250px", height: "250px" }} />  
            ))}  
        </section>  
    );  
}  


export default Gallery;  