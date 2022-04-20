const socket = io.connect();
socket.on('messages', data => {
    console.log(data);
});



function render(data) {
    let date = new Date().toDateString()
    const html = data.map((e=>{
        return(
            `<div>
            <strong style="color: blue">${e.correo}</strong>
            <em style="color: brown">[${date}]</em>:
            <em style="color: green; font-style: italic; ">${e.mensaje}</em> 
            </div>
            `
        )
    })).join(" ")
        

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

    const tabla = data.map((e=> {
        return(
            `
            <tr>
                <td style="font-size: 20px;">${e.nombre}</td>
                <td style="font-size: 20px;">${e.precio}</td>
                <td><img style="width: 50px; height: 50px;" src="${e.thumbnail}" </td>
            </tr>
        `
        )
    })).join(" ")

    document.getElementById('tablaCont').innerHTML = tabla         
    

})

