// Crea este archivo en tu carpeta principal
document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('productos')) {
        const productosEjemplo = [
            {
                id: 1,
                nombre: "MacBook Pro de 14” y 16”",
                precio: 1200,
                descripcion: "Potente laptop para profesionales",
                imagen: "https://www.apple.com/v/macbook-pro/an/images/overview/contrast/product_tile_mbp_14_16__f759zoojn1qy_large.png",
                stock: 10
            },
            {
                id: 2,
                nombre: "Custom PC",
                precio: 13000,
                descripcion: "Potente computadora para juegos con procesador de última generación",
                imagen: "https://preview.redd.it/w15gst9l6l171.jpg?width=1080&crop=smart&auto=webp&s=f2dca05d969e68d25bc7df709af499308cfdc7f6",
                stock: 5
            }
        ];
        localStorage.setItem('productos', JSON.stringify(productosEjemplo));
    }
});