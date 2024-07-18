usuarios = []

function agregarUsuario(id, pass, estado){ 
    usuarios.push({id
        ,pass
        ,estado}
    )   
    return console.log(`Se ha agregado un usuario : ${id}`)
} 

const buscarUsuario = function(id){
    let usuario = usuarios.find((id) => usuario.id === id);
    if(usuario.lenght != undefined){
        return `Se ha encontrado el siguiente libro: ${usuario.id}`
    }else{
        return "No encontrado"
    }
}

let libros = [];

//funcion que toma como parametros titulo libro , autor y año de publicacion
// y los agregue como un objeto a la lista de libros
function agregarLibro(titulo, autor, anno){ // agregamos el libro en el array libros
    libros.push({titulo
        ,autor
        ,anno}
    )   
    return console.log(`Se ha agregado el libro : ${titulo}`)
} 

// ejemplo el principito , antoine desaux exuberry, 1943

// funcion expresion
const eliminarLibro = function(titulo){
       
    // buscar indice en el array libros y eliminar e imprimir el mensaje y o que no esta
    if (libros.length === 0){
        return console.log("No hay libros para eliminar")            
    }
    else {
        libros.forEach((libro, indice) => {
            if(titulo === libro.titulo){
                libros.splice(indice,1) 
            return console.log(titulo)
            } 
            else{
                return console.log(`Libro ${titulo} no encontrado`)
            }
        })
    }
}

const buscarlibro = function(titulo){
    let libro = libros.find((libro) => libro.titulo === titulo);
    if(libro.lenght != undefined){
        return `Se ha encontrado el siguiente libro: ${libro.titulo}`
    }else{
        return "No encontrado"
    }
}