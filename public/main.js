const socket = io.connect();
socket.on('messages', data => {
    console.log(data);
});



// SECCION DEL CHAT



// function render(data) {
//     const html = data.map((elem, index) => {
//         return(`<div>
//             <strong>${elem.author}</strong>:
//             <em>${elem.text}</em> </div>`)
//     }).join(" ");
//     document.getElementById('messages').innerHTML = html;
// }

// socket.on('messages', function(data) { render(data); });

// function addMessage(e) {
//     const mensaje = {
//         author: document.getElementById('username').value,
//         text: document.getElementById('texto').value
//     };
    
//     socket.emit('new-message', mensaje);
//     return datos;
// }


function render(data) {
    let date = new Date().toDateString()
    const html = data.map((elem, index) => {
        return(`<div>
            <strong style="color: blue">${elem.correo}</strong>
            <em style="color: brown">[${date}]</em>:
            <em style="color: green; font-style: italic; ">${elem.mensaje}</em> </div>`)
    }).join(" ");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
    const mensaje = {
        correo: document.getElementById('correo').value,
        mensaje: document.getElementById('texto').value
    };
    
    socket.emit('new-message', mensaje);
    return false;
}




// SECCION DEL FORMULARIO DE PRODUCTOS

function addProduct(e){
    
    socket.emit('products', {
        nombre: document.getElementById('nombre2').value,
        precio: document.getElementById('precio2').value,
        thumbnail: document.getElementById('thumbnail2').value,
    })
    return false;
    // console.log(nombre, precio, thumbnail)
}


socket.on('products', function (data) { 

    document.getElementById('tablaCont').innerHTML +=            
    
    `
        <tr>
            <td style="font-size: 20px;"></td>
            <td style="font-size: 20px;">${data.nombre}</td>
            <td style="font-size: 20px;">${data.precio}</td>
            <td><img style="width: 50px; height: 50px;" src="${data.thumbnail}" </td>
        </tr>
    `
})

// const renderTabla =(data) =>{
//     const html = 

        
            // `


            //     <h2 style="text-align: center;">
            //         No hay productos
            //     </h2>


            //     <table class="table">
            //         <thead>
            //             <tr>
            //             <th scope="col">#</th>
            //             <th scope="col">Nombre</th>
            //             <th scope="col">Precio</th>
            //             <th scope="col">Imagen</th>
            //             </tr>
            //         </thead>
            //         <tbody>
            
            //     <tr>
                    
            //             <td style="font-size: 20px;"></td>
            //             <td style="font-size: 20px;">${data.nombre}</td>
            //             <td style="font-size: 20px;">${data.precio}</td>
            //             <td><img style="width: 50px; height: 50px;" src="${data.thumbnail}" </td>
                    
            //     </tr>
        

            //         </tbody>
            //     </table>`
        
    
            
        
    
//     document.getElementById("tablaCont").innerHTML = html
// }






