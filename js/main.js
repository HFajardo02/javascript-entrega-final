//Variables
let comensales = 0;
let adultos = 0;
let menores = 0;
let totalcomensales = 0;
let area = 0;
let ordenar = 0;
let alimentos = 0;
let ttcomensales = 0;
let ttadultos = 0;
let ttmenores = 0;

let ordencliente = 0;
let platillo = 0;
let bebida = 0;
let postre = 0;

let platilloIngresado="";
let platilloEncontrado="";

let areaSeleccionada="";
let areaMesa="";

let costoAlimento = 200;

//Funcion que se ejecuta presionando el botón "Restaurante"
function init()
{
    bienvenida();    
}


//Damos la bienvenida al comensal
function bienvenida(){

    (async () => {
        const { value: nombre } = await Swal.fire(
            {
                title: 'Buen día... ¿Cuál es su nombre?',
                input: 'text',
                inputLabel: 'Por favor ingrese su nombre',
                icon: `question`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí su nombre',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba su nombre!!!'
                    }
                }
            }
        )
          
        Swal.fire(
            {
                title: `Bienvenido ${nombre}!!!`,
                text: `Esperamos se encuentre bien!!!`,
                icon: `success`,
                confirmButtonText: `Siguiente`,
                allowOutsideClick: false,
                showConfirmButton: true
            }
            ).then ((respuesta) => 
            {
                if (respuesta.isConfirmed)
                {
                    personas();
                }
            }
        )

        let mostrarNombre = document.createElement("h5");
        mostrarNombre.innerHTML=`<br>Nombre del cliente: ${nombre}. <br> <br>`;
        document.body.appendChild(mostrarNombre);

    })()
}


//Funcion para saber cuantas personas comerán en el restaurante
function personas()
{
        //Funcion async
        (async () => {
            //Sweet Alert comensales
            const { value: comensales } = await Swal.fire(
                {
                    title: 'Comensales',
                    input: 'number',
                    inputLabel: '¿Cuántas personas desean comer?',
                    icon: `question`,
                    confirmButtonText: `Siguiente`,
                    allowOutsideClick: false,
                    inputPlaceholder: 'Escriba el número de comensales',
                    inputValidator: (value) => {
                        if (!value) {
                            return 'Por favor escriba el número de comensales!!!'
                        }
                    }
                }
            )
            console.log("Comensales: ", comensales);
            ttcomensales = parseInt (comensales); //Se reasigna el valor de la variable ya que no lo convertia en entero para realizar la comparacion.
            console.log("Total Comensales: ", ttcomensales);
            
            //Sweet Alert adultos
            const { value: adultos } = await Swal.fire(
                {
                    title: 'Personas adultas',
                    input: 'number',
                    inputLabel: '¿Cuántas personas adultas?',
                    icon: `question`,
                    confirmButtonText: `Siguiente`,
                    allowOutsideClick: false,
                    inputPlaceholder: 'Ingrese el número de adultos',
                    inputValidator: (value) => {
                        if (!value) {
                            return 'Por favor escriba el número de personas adultas!!!'
                        }
                    }
                }
            )
            console.log("Adultos: ", adultos);
            ttadultos = parseInt (adultos); //Se reasigna el valor de la variable ya que no lo convertia en entero para realizar la comparacion.
            console.log("Total Adultos: ", ttadultos);

            //Sweet Alert menores
            const { value: menores } = await Swal.fire(
                {
                    title: 'Personas menores',
                    input: 'number',
                    inputLabel: '¿Cuántos niños?',
                    icon: `question`,
                    confirmButtonText: `Siguiente`,
                    allowOutsideClick: false,
                    inputPlaceholder: 'Ingrese el número de menores',
                    inputValidator: (value) => {
                        if (!value) {
                            return 'Por favor escriba el número de niños!!!'
                        }
                    }
                }
            )
            console.log("Menores: ", menores);
            ttmenores = parseInt (menores); //Se reasigna el valor de la variable ya que no lo convertia en entero para realizar la comparacion.
            console.log("Total Menores: ", ttmenores);
            
            
            totalcomensales = (ttadultos + ttmenores);   
            console.log("Total Comensales: ", totalcomensales);
            
            if (ttcomensales !== totalcomensales)
            {
                Swal.fire(
                    {
                        title: `Numero de comensales`,
                        text: `El número de adultos y el número de niños no coincide con el número de comensales. Por favor ingrese los datos correctamente.`,
                        icon: `error`,
                        confirmButtonText: `Siguiente`,
                        allowOutsideClick: false,
                        showConfirmButton: true
                    }
                ).then ((respuesta2) => 
                {
                    if (respuesta2.isConfirmed)
                    {
                        personas();
                    }
                    
                }
                )
            }
            else
                {
                    //Se aplica setTimeout para mostrar comensales 
                    setTimeout(()=>{
                        impPersonas();
                    },1000);
                }
        })()
}


//Funcion para imprimir el numero de comensales en el HTML  
function impPersonas()
{

    let mostrarComensales = document.createElement("h5");
    mostrarComensales.innerHTML=`El total de comensales es: ${ttcomensales}.`;
    document.body.appendChild(mostrarComensales);

    let comensalesAdultos = document.createElement("h6");
    comensalesAdultos.innerHTML=`El total de comensales adultos es: ${ttadultos}.`;
    document.body.appendChild(comensalesAdultos);

    let comensalesMenores = document.createElement("h6");
    comensalesMenores.innerHTML=`El total de comensales niños es: ${ttmenores}. <br> <br>`;
    document.body.appendChild(comensalesMenores);

    meseroAsignado();
}


//Funcion para asignar mesero dependiendo del tipo de experiencia asignada en el arreglo
function meseroAsignado()
{
    //Arreglo de meseros que atenderán
    const meseros = [
        {
            nombreMesero: "Hugo",
            edad: 30,
            experiencia: 7
        },
        {
            nombreMesero: "Paco",
            edad: 25,
            experiencia: 5
        },
        {
            nombreMesero: "Luis",
            edad: 22,
            experiencia: 1
        },
    ]
    
    console.log ("Objeto Meseros",meseros);
        
    //Se asigna mesero de acuerdo al numero de comensales
    if (ttcomensales<=4)
    {
        Swal.fire(
            {
                title: `Mesero asignado`,
                text: `Mi nombre es: ${meseros[2].nombreMesero} y estaré a sus ordenes`,
                icon: `info`,
                confirmButtonText: `Siguiente`,
                allowOutsideClick: false,
                showConfirmButton: true
            }
        ).then ((respuestaMesero2) => 
        {
            if (respuestaMesero2.isConfirmed)
            {
                console.log ("Mesero asignado: ",meseros[2].nombreMesero);

                let meseroAtiende = document.createElement("h6");
                meseroAtiende.innerHTML=`Mesero que atenderá: ${meseros[2].nombreMesero}. <br> <br>`;
                document.body.appendChild(meseroAtiende);

                areaAsignada();
            }
        }
        )
    }
    else if ((ttcomensales>=5) && (ttcomensales<=8))
    {
        Swal.fire(
            {
                title: `Mesero asignado`,
                text: `Mi nombre es: ${meseros[1].nombreMesero} y estaré a sus ordenes`,
                icon: `info`,
                confirmButtonText: `Siguiente`,
                allowOutsideClick: false,
                showConfirmButton: true
            }
        ).then ((respuestaMesero1) => 
        {
            if (respuestaMesero1.isConfirmed)
            {
                console.log ("Mesero asignado: ",meseros[1].nombreMesero);

                let meseroAtiende = document.createElement("h6");
                meseroAtiende.innerHTML=`Mesero que atenderá: ${meseros[1].nombreMesero}. <br> <br>`;
                document.body.appendChild(meseroAtiende);
                
                areaAsignada();
            }
        }
        )
    }
    else
    {
        Swal.fire(
            {
                title: `Mesero asignado`,
                text: `Mi nombre es: ${meseros[0].nombreMesero} y estaré a sus ordenes`,
                icon: `info`,
                confirmButtonText: `Siguiente`,
                allowOutsideClick: false,
                showConfirmButton: true
            }
        ).then ((respuestaMesero3) => 
        {
            if (respuestaMesero3.isConfirmed)
            {
                console.log ("Mesero asignado: ",meseros[0].nombreMesero);

                let meseroAtiende = document.createElement("h6");
                meseroAtiende.innerHTML=`Mesero que atenderá: ${meseros[0].nombreMesero}. <br> <br>`;
                document.body.appendChild(meseroAtiende);
                
                areaAsignada();
            }
        }
        )
    }
}


//Funcion para asignar area de mesa
function areaAsignada()
{
    (async () => {

        let inputOptions = new Promise((resolve) => {
            resolve({
                'Terraza': 'Terraza',
                'Patio': 'Patio',
                'Salón': 'Salón'
            })
        })
          
        let { value: areaMesa } = await Swal.fire({
            title: 'Seleccione un area para asignarle mesa',
            input: 'radio',
            confirmButtonText: `Siguiente`,
            inputOptions: inputOptions,
            allowOutsideClick: false,
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor seleccione un area!'
                }
            }
            
        })

        console.log("Area asignada: ",areaMesa);

        if (areaMesa === "Terraza" && ttmenores>0) {
            Swal.fire(
                {
                    title: `Area no asignada`,
                    text: `Por seguridad de los niños, no se pude asignar mesa en el área de terraza!!!`,
                    icon: `error`,
                    confirmButtonText: `Siguiente`,
                    allowOutsideClick: false,
                    showConfirmButton: true
                }
            ).then ((respuesta4) => 
            {
                if (respuesta4.isConfirmed)
                {
                    areaAsignada();
                }
                
            }
            )
        }
        else if ((areaMesa === "Terraza" && ttmenores <= 0) || areaMesa === "Patio" || areaMesa === "Salón")
        {
            Swal.fire(
                {
                    title: `Area asignada`,
                    text: `Su mesa fué asignada en el área: ${areaMesa}`,
                    icon: `success`,
                    confirmButtonText: `Siguiente`,
                    allowOutsideClick: false,
                    showConfirmButton: true
                }
            ).then ((respuesta5) => 
            {
                if (respuesta5.isConfirmed)
                {
                    notificarPrecio();
                }
            }
            )

            let areaSeleccionada = document.createElement("h6");
            areaSeleccionada.innerHTML=`Area asignada: ${areaMesa}. <br>`;
            document.body.appendChild(areaSeleccionada);
        }
    })()
}

//Se le notificará al comensal el costo por cada alimento
function notificarPrecio()
{

    Swal.fire(
        {
            position: 'center',
            icon: 'info',
            title: 'Cada vez que solicite un alimento, se le hará un cargo de $200 MXN',
            showConfirmButton: true,
            confirmButtonText: `Aceptar`,
            allowOutsideClick: false
        }
    ).then ((respuesta6) => 
    {
        if (respuesta6.isConfirmed)
        {
            ordenarAlimentos();
        }
        
    }
    )

}

//Funcion para saber si el comensal desea ordenar algun alimento
function ordenarAlimentos()
{
    (async () => {

        let inputOptions = new Promise((resolve) => {
            resolve({
                'Si': 'Si',
                'No': 'No',
            })
        })
          
        let { value: pedirAlimento } = await Swal.fire({
            title: '¿Desea ordenar algún alimento?',
            input: 'radio',
            icon: `question`,
            confirmButtonText: `Siguiente`,
            allowOutsideClick: false,
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor seleccione una opcion!'
                }
            }
            
        })

        console.log("Pedir alimentos?: ", pedirAlimento);

        if (pedirAlimento === "Si")
        {

            let ordenoAlimento = document.createElement("h6");
            ordenoAlimento.innerHTML=`<br>¿Se ordenó Alimento? ${pedirAlimento}.`;
            document.body.appendChild(ordenoAlimento);

            tipoAlimento();
        }
        else if (pedirAlimento === "No")
        {
            impTotal(alimentos, platillo, bebida, postre );
        }
    })()

}


//Funcion para saber que tipo de alimento desea ordenar el comensal
function tipoAlimento()
{
    
    (async () => {

        let inputOptions = new Promise((resolve) => {
            resolve({
                'Plato Fuerte': 'Plato Fuerte',
                'Bebida': 'Bebida',
                'Postre': 'Postre',
            })
        })

        let { value: tipoAlimento } = await Swal.fire({
            title: '¿Que platillo desea ordenar?',
            input: 'radio',
            icon: `question`,
            confirmButtonText: `Siguiente`,
            allowOutsideClick: false,
            inputOptions: inputOptions,
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor seleccione una opcion!'
                }
            }
        })

        console.log("Tipo de alimento?: ", tipoAlimento);

        let queAlimento = document.createElement("h6");
        queAlimento.innerHTML=`Tipo de Alimento: ${tipoAlimento}.`;
        document.body.appendChild(queAlimento);

        if (tipoAlimento === "Plato Fuerte")
        {

            //************************* SECCION PLATO FUERTE ****************************

            const menuPlatillos = [
                { nombrePlatillo: "Cemitas", precioPlatillo: 100},
                { nombrePlatillo: "Tacos", precioPlatillo: 100},
                { nombrePlatillo: "Enchiladas de Mole", precioPlatillo: 100},
                { nombrePlatillo: "Enchiladas Suizas", precioPlatillo: 100},
                { nombrePlatillo: "Frijoles Charros", precioPlatillo: 100},
                { nombrePlatillo: "Chalupas", precioPlatillo: 100},
            ]
            console.log ("Objeto Platillos: ",menuPlatillos);

            
            let aPlatillos = menuPlatillos[0].nombrePlatillo;
            let bPlatillos = menuPlatillos[1].nombrePlatillo;
            let cPlatillos = menuPlatillos[2].nombrePlatillo;
            let dPlatillos = menuPlatillos[3].nombrePlatillo;
            let ePlatillos = menuPlatillos[4].nombrePlatillo;
            let fPlatillos = menuPlatillos[5].nombrePlatillo;
            


            let inputOptions = new Promise((resolve) => {
                resolve({
                    'Cemitas':aPlatillos,
                    'Tacos':bPlatillos,
                    'Enchiladas de Mole':cPlatillos,
                    'Enchiladas Suizas':dPlatillos,
                    'Frijoles Charros':ePlatillos,
                    'Chalupas':fPlatillos,
                })
            })

            let { value: selPlatillo } = await Swal.fire({
                title: '¿Que plato fuerte desea ordenar?',
                input: 'radio',
                icon: `question`,
                confirmButtonText: `Siguiente`,
                width: 800,
                allowOutsideClick: false,
                inputOptions: inputOptions,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor seleccione una opcion!'
                    }
                }
            })

            console.log("Platillo?: ", selPlatillo);

            let quePlatoFuerte = document.createElement("h6");
            quePlatoFuerte.innerHTML=`Plato Fuerte: ${selPlatillo}.`;
            document.body.appendChild(quePlatoFuerte);

            platillo=platillo+1;
            alimentos=alimentos+1;

            ordenarAlimentos();
            
            //*************************  FIN SECCION PLATO FUERTE ****************************

        }
        else if (tipoAlimento === "Bebida")
        {

            //************************* SECCION BEBIDAS ****************************

            const menuBebidas = [
                { nombreBebida: "Refresco", precioBebida: 25},
                { nombreBebida: "Agua Fresca", precioBebida: 25},
                { nombreBebida: "Agua Embotellada", precioBebida: 25},
                { nombreBebida: "Café", precioBebida: 25},
                { nombreBebida: "Cerveza", precioBebida: 25},
                { nombreBebida: "Limonada", precioBebida: 25},
            ]
            console.log ("Objeto Bebidas: ", menuBebidas);

            let aBebidas = menuBebidas[0].nombreBebida;
            let bBebidas = menuBebidas[1].nombreBebida;
            let cBebidas = menuBebidas[2].nombreBebida;
            let dBebidas = menuBebidas[3].nombreBebida;
            let eBebidas = menuBebidas[4].nombreBebida;
            let fBebidas = menuBebidas[5].nombreBebida;
            


            let inputOptions = new Promise((resolve) => {
                resolve({
                    'Refresco':aBebidas,
                    'Agua Fresca':bBebidas,
                    'Agua Embotellada':cBebidas,
                    'Café':dBebidas,
                    'Cerveza':eBebidas,
                    'Limonada':fBebidas,
                })
            })

            let { value: selBebida } = await Swal.fire({
                title: '¿Que bebida desea ordenar?',
                input: 'radio',
                icon: `question`,
                confirmButtonText: `Siguiente`,
                width: 800,
                allowOutsideClick: false,
                inputOptions: inputOptions,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor seleccione una opcion!'
                    }
                }
            })

            console.log("Bebida?: ", selBebida);

            let queBebida = document.createElement("h6");
            queBebida.innerHTML=`Bebida: ${selBebida}.`;
            document.body.appendChild(queBebida);

            bebida=bebida+1;
            alimentos=alimentos+1;

            ordenarAlimentos();
            
            //*************************  FIN SECCION BEBIDAS ****************************

        }
        else if (tipoAlimento === "Postre")
        {

            //************************* SECCION POSTRE ****************************

            const menuPostres = [
                { nombrePostre: "Flan", precioPostre: 50},
                { nombrePostre: "Tarta", precioPostre: 50},
                { nombrePostre: "Duraznos en almibar", precioPostre: 50},
                { nombrePostre: "Helado", precioPostre: 50},
                { nombrePostre: "Pie", precioPostre: 50},
                { nombrePostre: "Chocobrown", precioPostre: 50},
            ]
            console.log ("Objeto Postres: ", menuPostres);

            let aPostres = menuPostres[0].nombrePostre;
            let bPostres = menuPostres[1].nombrePostre;
            let cPostres = menuPostres[2].nombrePostre;
            let dPostres = menuPostres[3].nombrePostre;
            let ePostres = menuPostres[4].nombrePostre;
            let fPostres = menuPostres[5].nombrePostre;
            


            let inputOptions = new Promise((resolve) => {
                resolve({
                    'Flan':aPostres,
                    'Tarta':bPostres,
                    'Duraznos en almibar':cPostres,
                    'Helado':dPostres,
                    'Pie':ePostres,
                    'Chocobrown':fPostres,
                })
            })

            let { value: selPostre } = await Swal.fire({
                title: '¿Que postre desea ordenar?',
                input: 'radio',
                icon: `question`,
                confirmButtonText: `Siguiente`,
                width: 800,
                allowOutsideClick: false,
                inputOptions: inputOptions,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor seleccione una opcion!'
                    }
                }
            })

            console.log("Postre?: ", selPostre);

            let quePostre = document.createElement("h6");
            quePostre.innerHTML=`Postre: ${selPostre}.`;
            document.body.appendChild(quePostre);

            postre=postre+1;
            alimentos=alimentos+1;
            
            ordenarAlimentos();
            
            //*************************  FIN SECCION BEBIDAS ****************************

        }

    })()

    return(platillo, bebida, postre);
    
}

function impTotal(alimentos, platillo, bebida, postre)
{

    Swal.fire({
        title: 'TOTAL DE LA CUENTA',
        text: `Se despacharon ${alimentos} alimentos.`,
        html:   `<p>Platos Fuertes: ${platillo}</p>
                <br>
                <p>Bebidas: ${bebida}</p>
                <br>
                <p>Postres: ${postre}</p>
                <br>
                <p><b><h2>El total a pagar es de: $${alimentos*costoAlimento}MXN</h2></b></p>`,
        icon: 'info',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        allowOutsideClick: false,
        confirmButtonText: 'Gracias por su preferencia'
    })

    let queAlimentos = document.createElement("h5");
    queAlimentos.innerHTML=`<br> En total se despacharon: ${alimentos} alimentos.`;
    document.body.appendChild(queAlimentos);

    let quePlatillos = document.createElement("h6");
    quePlatillos.innerHTML=`En total se despacharon: ${platillo} platos fuertes.`;
    document.body.appendChild(quePlatillos);

    let queBebidas = document.createElement("h6");
    queBebidas.innerHTML=`En total se despacharon: ${bebida} bebidas.`;
    document.body.appendChild(queBebidas);

    let quePostres = document.createElement("h6");
    quePostres.innerHTML=`En total se despacharon: ${postre} postres.`;
    document.body.appendChild(quePostres);

    let cuenta = document.createElement("h3");
    cuenta.innerHTML=`<br>El total a pagar es de: $${alimentos*costoAlimento}MXN <br> <br>`;
    document.body.appendChild(cuenta);

}

