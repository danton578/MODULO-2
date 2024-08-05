// Clase que crea usuarios y los agrega a una lista
class Usuarios{
    constructor(largo) {
        this.largo = largo;
        this.lenght = 0;
        this.data = [ { id : {} ,
                        pass: {},
                        estadoConexion: {},
                      }                
        ];

    }
    // agregar usuarios
    agregarUsuario(usuid,passusu){
        if (this.lenght <= this.largo-1) {
            this.data[this.lenght] = {'id': usuid, 'pass': passusu, 'estadoConexion': 0}
            this.lenght++
            return this.lenght
        }
        else{
            return console.log("no se puede agregar mas")
        }
    }
    // acceder a elementos
    accederElemento(index) {
        return this.data[index];
        
    }
    // revisar cupos disponibles 
    CuposDisponibles(){
        return (this.largo - this.lenght);
    }
    // login en sistema
    Login(uss){
        let contador = 0
        let indicador = 0
        for (let key in this.data) {
            //console.log(`este es key: ${key}`)
            //console.log(`este es largo array: ${array.lenght -1}`)
            let a = this.data[key]['id'];
            a = String(a).toUpperCase();
            //console.log(Number(key) === Number(array.lenght -1));
            if (Number(key) < (this.lenght -1) && uss.toUpperCase() === a) {
                //console.log('wena');
                while(contador < 3){
                const limite = 3
                const varPassUsu = String(prompt(`ingrese clave te quedan ${limite - contador} de 3 intentos: `)).toUpperCase()
                let b = this.data[key]['pass'];
                b = String(b).toUpperCase();
                if (varPassUsu === b){
                    console.log('Acceso correcto')
                    this.data[key]['estadoConexion'] = 1;
                    indicador = key;
                    break; 
                }else if(contador < 3){
                        contador++
                        console.log('password incorrecto')
                }else{
                    //console.log('acceso denegado')
                }
            }
            if(contador === 3){
                console.log('acceso denegado')
                break; 
            }
            break;
            } else if (key == (this.lenght -1) && uss.toUpperCase() === a) {
                //console.log('wena');
                while(contador < 3){
                const limite = 3
                const varPassUsu = String(prompt(`ingrese clave te quedan ${limite - contador} de 3 intentos: `)).toUpperCase()
                let b = this.data[key]['pass'];
                b = String(b).toUpperCase();
                if (varPassUsu === b){
                    console.log('Acceso correcto');
                    this.data[key]['estadoConexion'] = 1;
                    indicador = key;
                    break;
                }else if(contador < 3){
                        contador++
                        console.log('password incorrecto')
                }else{
                    console.log('acceso denegado')
                }
            }
            if(contador === 3){
                console.log('acceso denegado')
                break; 
            }
            }else if (key == (this.lenght -1) && uss.toUpperCase() != a){
                //console.log('mala');
                let validador = true;
                while(validador = true){
                    const cupos = this.CuposDisponibles()
                    let respAgregaUsu = String(prompt(`usuario no existe y quedan ${cupos} cupo disponibles de ${this.largo},
                         ¿desea crear usuario?, responda si o no`));
                    respAgregaUsu = respAgregaUsu.toUpperCase();
                    if(respAgregaUsu === 'SI'){
                        const varpass = String(prompt("cree un password por favor: "))
                        console.log('usuario creado con exito')
                        this.agregarUsuario(uss,varpass)
                        validador = false;
                        break;
                    } else if(respAgregaUsu == 'NO'){
                        validador = false;
                        console.log(`hasta luego`)
                        break;
                    }
                }
            }
        }
        return this.data[indicador]['estadoConexion']   
    }
    Salir(){
        for(let key in this.data){
            this.data[key]['estadoConexion'] = 0;
        return 0
        } 
    }
}
// fin usuarios sistema

// class Encuestas
class Encuestas{
    constructor(largo){
        this.largo = largo
        this.lenght = 0;
        this.pregunta = [ 
                          {
                            'preg' : {},
                            'answer' : {},
                           }
                        ]
        //this.respuestas = [{'respuesta': {}, 'valor' : {}, 'q_opciones_pregunta' : {}}]
        }
    // agrega preguntas a la encuesta
    agregarPregunta(cuestion,nroResp){
        this.nroResp = nroResp;
        let respuestas = [{'respuesta': {}, 'valor' : {}, 'q_opciones_pregunta' : {}}]
        if (this.lenght <= this.largo-1) {
            this.pregunta[this.lenght] = {'preg': 'Pregunta nro ' + String(this.lenght) + ' : ' + cuestion}
            for (let i=0; i<= this.nroResp-1;i++){
                let resp = prompt('ingrese una respuesta')
                respuestas[i] = {'respuesta' : resp, 'valor' : 0, 'q_opciones_pregunta' : nroResp}
            }
            this.pregunta[this.lenght].answer = respuestas;
            this.lenght++
            return this.lenght
        }
        else{
            return console.log("no se puede agregar mas")
        }
    }
    // chequea todas las preguntas de la encuesta
    verPreguntas(){
        for(let i=0; i<=this.lenght-1;i++){
            console.log(this.pregunta[i]['preg']);
        }
    }
    // chequea resultado de una pregunta en particular
    verResultadoPregunta(index){
        console.log(this.pregunta[index]['preg'])
        for(let key in this.pregunta[index].answer){
            console.log(`   respuesta ${Number(key)+1} :  ${this.pregunta[index].answer[key]['respuesta']} ---- Votacion :  ${this.pregunta[index].answer[key]['valor']}`)
        }
    }
    // votacion para pregunta particular
    votarPregunta(index){
        let estado_voto = -1
        console.log(`La ${this.pregunta[index]['preg']} tiene: `)
        for(let key in this.pregunta[index].answer){
            console.log(`   respuesta ${Number(key)+1} :  ${this.pregunta[index].answer[key]['respuesta']}`)
        }
        while (estado_voto < 0 && estado_voto < this.pregunta[index].answer[0]['q_opciones_pregunta']){
            const voto = parseInt(prompt('inserte nro de respuesta para voto: '))
            //console.log(voto)
            if ((voto > this.pregunta[index].answer[0]['q_opciones_pregunta']) || (voto < 0) || isNaN(voto)=== true){
                console.log(`voto erroneo debe estar entre 1 y ${this.pregunta[index].answer[0]['q_opciones_pregunta']}`)
            }
            else{
                //console.log(this.pregunta[index].answer[voto-1]['respuesta'])
                //console.log(this.pregunta[index].answer[voto-1]['valor'])
                //console.log('nuevo valor')
                this.pregunta[index].answer[voto-1]['valor'] = this.pregunta[index].answer[voto-1]['valor']+1
                console.log('voto exitoso');
                estado_voto = voto;
                break;
            }
        }
    }
}
// clase que contiene las encuestas
class ListaEncuestas extends Encuestas{
    constructor(large,largo) {
        super(largo);
        this.largo = largo;
        this.large = large;
        this.len = 0;
        this.dat = [ { id : {} ,
                        encuesta: {},
                        q_max : {},               
        } ];
    }
    // agrega una encuesta nueva
    agregarEncuesta (encuesta){
        if (this.len <= this.large-1) {
            this.dat[this.len] = {'id': encuesta, 'encuesta': new Encuestas(8), 'q_max': this.large}
            this.len++
        }
        else{
            return console.log("no se puede agregar mas")
        }
    }
    // chequea las encuestas y sus respuestas
    verEncuestas(){
        for(let i=0; i<=this.len-1;i++){
            console.log(`Nombre encuesta Nro ${i}: ${this.dat[i]['id']}`)
            console.log('   Las preguntas de la encuesta: ')
            this.dat[i]['encuesta'].verPreguntas()
        }
    }
}


// DEFINO EL MAXIMO DE USUARIOS POR SISTEMA

const array = new Usuarios(8);

// agrego dos de prueba
array.agregarUsuario('pepito','1234');
array.agregarUsuario('opo','12394');

//login y bienvenida al sistema

console.log("BIENVENIDOS AL SISTEMA DE VOTACION DE ENCUESTAS RANDOM SVER");
console.log(`-----------------------------------------------------------`);
//console.log(`ingrese usuario: ${varUsuIng}`);
let val_conectado = 0
while (val_conectado != 1){
    let varUsuIng = prompt(`  ! BIENVENIDOS AL 
        SISTEMA DE VOTACION DE ENCUESTAS RANDOM SVER !
        ingrese usuario :`);
    let conectado = array.Login(varUsuIng);
    if (conectado === 1){
        val_conectado = 1;
    }
}

//const conectado = 1;
//console.log(conectado === 1);
let validador_salir = 0; // validador para salir del sistema
let lista = new ListaEncuestas(3,8); // creo una lista de 3 encuestas y cada una con maximo 8 preguntas por cada una de ellas

// este es un menu para seleccion de opciones
if(val_conectado === 1){
    while (validador_salir === 0){
        const opcion = prompt(`--------------------MENU-------------------------
                                opcion 1: Crear Encuesta
                                opcion 2: Votar Encuesta
                                opcion 3: Salir`);
        // esta opcion es para salir del sistema y desloguear al usuario
        if (opcion === '3'){
            array.Salir();
            console.log('hasta luego');
            validador_salir = 1;
        }
        // opcion para crear una encuesta con sus respectivas preguntas
        else if (opcion === '1'){
            //console.log('entro aca')
            lista.agregarEncuesta(prompt('agrega nombre encuesta'));
            for(let i=1; i<=lista.large;i++){
                //console.log(i)
                //console.log(i === lista.len)
                if(i=== lista.len){
                    for(let j=1 ; j<=3;j++ ){
                        //console.log(j)
                        let pregunta = prompt(`ingrese pregunta nro ${j} de 3 preguntas:`)
                        let qresp = prompt('ingrese numero de respuestas')
                        lista.dat[i-1]['encuesta'].agregarPregunta(pregunta,qresp)
                    }
                }
            }
            //validador_salir = 1;
        }
        // opcion para votar una encuesta
        else if(opcion === '2'){
            if(lista.len === 0){
                console.log('no hay encuestas actualmente favor cree una')
            }
            else{
                console.log('seleccione encuesta a votar: ')
                lista.verEncuestas()
                const seleccion = parseInt(prompt(`Seleccione el Nro de encuesta a votar: `))
                if(seleccion< lista.len) {
                    for(k=0; k<3;k++){
                        lista['dat'][seleccion]['encuesta'].votarPregunta(k);
                        if(k===2){
                            const ver_resultado = prompt('desea ver resultado de la votacion presione 1 para si otra para No')
                            if(ver_resultado === '1'){
                                for(r=0; r<3;r++){
                                    lista['dat'][seleccion]['encuesta'].verResultadoPregunta(r);
                                }
                            }
                            else{
                                console.log('ok')
                            }
                        }
                    }
                //validador_salir = 1;
                }
                else{
                    console.alert('seleccion no valida')
                }
            }
        }
    }
}


//console.log(nueva)                    
//let test = new Encuestas(8);

//test.agregarPregunta('te gusta el pan con mantequilla',2)


