const socket = io.connect();
socket.on('messages', data => {
    console.log(data);
});



function render(data) {
    const html = data.map((e=>{
        return(
            `<div>
            <strong style="color: blue">${e.email}</strong>
            <em style="color: brown">[${e.date}]</em>:
            <em style="color: green; font-style: italic; ">${e.message}</em> 
            </div>
            `
        )
    })).join(" ")
        

    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
    const mensaje = {
        email: document.getElementById('correo').value,
        message: document.getElementById('texto').value
    };
    
    socket.emit('new-message', mensaje);
    return false;
}




// SECCION DEL FORMULARIO DE PRODUCTOS

function addProduct(e){
    
    socket.emit('products', {
        title: document.getElementById('nombre2').value,
        price: document.getElementById('precio2').value,
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
                <td style="font-size: 20px;">${e.title}</td>
                <td style="font-size: 20px;">${e.price}</td>
                <td><img style="width: 50px; height: 50px;" src="${e.thumbnail}" </td>
            </tr>
        `
        )
    })).join(" ")

    document.getElementById('tablaCont').innerHTML = tabla         
    

})

