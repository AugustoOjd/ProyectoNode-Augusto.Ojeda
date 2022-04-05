"use strict";
const formAdmin = document.getElementById('formAdmin');
const getAdmin = () => {
    fetch('http://localhost:8080/api/productos')
        .then(res => res.json())
        .then(data => {
        console.log('esto es get admin', data);
        let datos = document.getElementById('contTabla');
        datos.innerHTML = data.map((e) => `   
            <tr>
                <td style="font-size: 20px;">${e.id}</td>
                <td style="font-size: 20px;">${e.timestamp}</td>
                <td style="font-size: 20px;"> ${e.nombre}</td>
                <td style="font-size: 20px;">${e.descripcion}</td>
                <td style="font-size: 20px;">${e.codigo}</td>
                <td><img style="width: 50px; height: 50px;" src=${e.foto} </td>
                <td style="font-size: 20px;">${e.precio}</td>
                <td style="font-size: 20px;">${e.stock}</td>


            </tr>

            `);
    });
};
getAdmin();
const getCarrito = () => {
    fetch('http://localhost:8080/api/carrito')
        .then(res => res.json())
        .then(data => {
        console.log('esto es get admin', data);
        let datos = document.getElementById('carrito');
        datos.innerHTML = data.map((e) => `
        <h3>Carrito con id: ${e.id}</h3>
        <ul>
            <li>id: ${e.id}</li>
            <li>Timestamp: ${e.timestamp}</li>
        </ul>

        `);
    });
};
getCarrito();
//     <ul>
//     <li>id: ${e.id}</li>
//     <li>Timestamp: ${e.timestamp}</li>
//     <li>Nombre: ${e.nombre}</li>
//     <li>Descripion: ${e.descripcion}</li>
//     <li>codigo: ${e.codigo}</li>
//     <li>Imagen: ${e.foto}</li>
//     <li>Precio: ${e.precio}</li>
//     <li>Stock: ${e.stock}</li>
// </ul>
// function post(){
//     console.log('click')
let data = new FormData();
fetch('http://localhost:8080/api/productos', {
    method: 'POST',
    headers: {
        'Content-Type': 'aplication/json'
    },
    body: JSON.stringify({})
})
    .then(res => res.json())
    .then(data => console.log('esto es post admin', data));
// }
