const formAdmin = document.getElementById('formAdmin') as HTMLElement

fetch('http://localhost:8080/api/productos')
    .then(res => res.json())
    .then(data => {console.log('esto es get', data)

        let datos = document.getElementById('api') as HTMLElement 

        datos.innerHTML = data.map((e:any)=>
        
            `
                <ul>
                    <li>id: ${e.id}</li>
                    <li>Timestamp: ${e.timestamp}</li>
                    <li>Nombre: ${e.nombre}</li>
                    <li>Descripion: ${e.descripcion}</li>
                    <li>codigo: ${e.codigo}</li>
                    <li>Imagen: ${e.foto}</li>
                    <li>Precio: ${e.precio}</li>
                    <li>Stock: ${e.stock}</li>
                </ul>
            `
        ) 
    
    })
    

// function post(){
    
//     console.log('click')
let data = new FormData()

    fetch('http://localhost:8080/api/productos', {
        method:'POST',
        headers:{
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({})
    })
    .then(res => res.json())
    .then(data=> console.log('esto es post', data))

// }