//Arrays
const platillos = [];
const bebidas = [];
const postres = [];
const meseros = [];

let op = 0;

//Funcion que se ejecuta presionando el botón "Administracion"
function ejecutaAdmon()
{
    menu();
}

//Funcion Menu
function menu()
{
      
    (async () => {
    
        let inputOptions = new Promise((resolve) => {
            resolve({
                'Plato fuerte': 'Plato fuerte',
                'Bebida': 'Bebida',
                'Postre': 'Postre',
                'Mesero': 'Mesero'
            })
        })
          
        let { value: categoria } = await Swal.fire({
            title: 'Categorías',
            text: '¿En qué categoría desea ingresar los datos?',
            input: 'radio',
            width: 600,
            confirmButtonText: `Siguiente`,
            inputOptions: inputOptions,
            allowOutsideClick: false,
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Salir',
            inputValidator: (value) => {
                if (!value) {
                    return 'Por favor seleccione una categoría!!!'
                }
            }
        })

        console.log("Categoría: ",categoria);

        if (categoria === "Plato fuerte")
        {
            agregarPlatoFuerte();
        }
        else if (categoria === "Bebida")
        {
            agregarBebida();
        }
        else if (categoria === "Postre")
        {
            agregarPostre();
        }
        else if (categoria === "Mesero")
        {
            agregarMesero();
        }
        else if (categoria === undefined)
        {
            gracias();
            console.log ("Arreglo Platillos: ", platillos);
            console.log ("Arreglo Bebidas: ", bebidas);
            console.log ("Arreglo Postres: ", postres);
            console.log ("Arreglo Meseros: ", meseros);
        }
    })()
    
}



//Clase para los datos de los platillos
class platilloNuevo
{
    constructor (nombrePlatillo, precioPlatillo)
    {
        this.nombrePlatillo = nombrePlatillo,
        this.precioPlatillo = precioPlatillo
    }
}

//Funcion para ir capturando los datos del nuevo platillo
function agregarPlatoFuerte()
{
    
    (async () => {

        //Se solicitan los datos del nuevo platillo

        const { value: nombrePlatilloNuevo} = await Swal.fire(
            {
                title: 'Nombre del Nuevo Platillo',
                input: 'text',
                text: 'Ingrese el nombre del nuevo platillo',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el nombre del nuevo platillo',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el nombre del nuevo platillo!!!'
                    }
                }
            }
        )

        const { value: precioPlatilloNuevo} = await Swal.fire(
            {
                title: 'Precio del Nuevo Platillo',
                input: 'number',
                text: 'Ingrese el precio del nuevo platillo',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el precio del nuevo platillo',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el precio del nuevo platillo!!!'
                    }
                }
            }
        )

        console.log ("Nombre platillo nuevo: ", nombrePlatilloNuevo);
        console.log ("Precio platillo nuevo: ", precioPlatilloNuevo);

        //Inserta los nuevos datos en el arreglo platillos

        let agregarPlatoFuerte = new platilloNuevo (nombrePlatilloNuevo, precioPlatilloNuevo);
        platillos.push(agregarPlatoFuerte)
        //console.log ("Arreglo Platillos: ", platillos);

        
        //Imprimir en pantalla datos del nuevo platillo

        let mostrarNombrePlatilloNuevo = document.createElement("h6");
        mostrarNombrePlatilloNuevo.innerHTML=`Nombre del nuevo platillo: ${nombrePlatilloNuevo}.`;
        document.body.appendChild(mostrarNombrePlatilloNuevo);

        let mostrarPrecioPlatilloNuevo = document.createElement("h6");
        mostrarPrecioPlatilloNuevo.innerHTML=`Precio del nuevo platillo: ${precioPlatilloNuevo}.`;
        document.body.appendChild(mostrarPrecioPlatilloNuevo);

        let mostrarArregloPlatillos = document.createElement("h6");
        mostrarArregloPlatillos.innerHTML=`Se agregaron los datos del nuevo platillo en el arreglo "Platillos" <br> <br>`;
        document.body.appendChild(mostrarArregloPlatillos);

        menu();

    })()
}





//Clase para los datos de las bebidas
class bebidaNueva
{
    constructor (nombreBebida, precioBebida)
    {
        this.nombreBebida = nombreBebida,
        this.precioBebida = precioBebida
    }
}

//Funcion para ir capturando los datos de la nueva bebida
function agregarBebida()
{
    (async () => {

        const { value: nombreBebidaNueva} = await Swal.fire(
            {
                title: 'Nombre de la Nueva Bebida',
                input: 'text',
                text: 'Ingrese el nombre de la nueva bebida',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el nombre de la nueva bebida',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el nombre de la nueva bebida!!!'
                    }
                }
            }
        )

        const { value: precioBebidaNueva} = await Swal.fire(
            {
                title: 'Precio de la Nueva Bebida',
                input: 'number',
                text: 'Ingrese el precio de la nueva bebida',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el nombre de la nueva bebida',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el precio de la nueva bebida!!!'
                    }
                }
            }
        )

        console.log ("Nombre bebida nueva: ", nombreBebidaNueva);
        console.log ("Precio bebida nueva: ", precioBebidaNueva);

        let agregarBebida = new bebidaNueva (nombreBebidaNueva, precioBebidaNueva);
        bebidas.push(agregarBebida)
        //console.log ("Arreglo Bebidas: ", bebidas);

        let mostrarNombreBebidaNueva = document.createElement("h6");
        mostrarNombreBebidaNueva.innerHTML=`Nombre de la nueva bebida: ${nombreBebidaNueva}.`;
        document.body.appendChild(mostrarNombreBebidaNueva);

        let mostrarPrecioBebidaNueva = document.createElement("h6");
        mostrarPrecioBebidaNueva.innerHTML=`Precio de la nueva bebida: ${precioBebidaNueva}.`;
        document.body.appendChild(mostrarPrecioBebidaNueva);

        let mostrarArregloBebidas = document.createElement("h6");
        mostrarArregloBebidas.innerHTML=`Se agregaron los datos de la nueva bebida en el arreglo "Bebidas" <br> <br>`;
        document.body.appendChild(mostrarArregloBebidas);

        menu();

    })()
    
}





//Clase para los datos de los postres
class postreNuevo
{
    constructor (nombrePostre, precioPostre)
    {
        this.nombrePostre = nombrePostre,
        this.precioPostre = precioPostre
    }
}

//Funcion para ir capturando los datos del nuevo postre
function agregarPostre()
{
    (async () => {

        const { value: nombrePostreNuevo} = await Swal.fire(
            {
                title: 'Nombre del Nuevo Postre',
                input: 'text',
                text: 'Ingrese el nombre del nuevo postre',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el nombre del nuevo postre',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el nombre del nuevo postre!!!'
                    }
                }
            }
        )

        const { value: precioPostreNuevo} = await Swal.fire(
            {
                title: 'Precio del Nuevo Postre',
                input: 'number',
                text: 'Ingrese el precio del nuevo postre',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el nombre del nuevo postre',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el precio del nuevo postre!!!'
                    }
                }
            }
        )

        console.log ("Nombre postre nuevo: ", nombrePostreNuevo);
        console.log ("Precio postre nuevo: ", precioPostreNuevo);

        let agregarPostre = new postreNuevo (nombrePostreNuevo, precioPostreNuevo);
        postres.push(agregarPostre)
        //console.log ("Arreglo Postres: ", postres);

        let mostrarNombrePostreNuevo = document.createElement("h6");
        mostrarNombrePostreNuevo.innerHTML=`Nombre del nuevo postre: ${nombrePostreNuevo}.`;
        document.body.appendChild(mostrarNombrePostreNuevo);

        let mostrarPrecioPostreNuevo = document.createElement("h6");
        mostrarPrecioPostreNuevo.innerHTML=`Precio del nuevo postre: ${precioPostreNuevo}.`;
        document.body.appendChild(mostrarPrecioPostreNuevo);

        let mostrarArregloPostres = document.createElement("h6");
        mostrarArregloPostres.innerHTML=`Se agregaron los datos del nuevo postre en el arreglo "Postres" <br> <br>`;
        document.body.appendChild(mostrarArregloPostres);

        menu();

    })()
    
}





//Clase para los datos de los meseros
class meseroNuevo
{
    constructor (nombre, edad, experiencia)
    {
        this.nombre = nombre,
        this.edad = edad,
        this.experiencia = experiencia
    }
}

//Funcion para ir capturando los datos del nuevo mesero
function agregarMesero()
{
    (async () => {

        const { value: nombreMeseroNuevo} = await Swal.fire(
            {
                title: 'Nombre del Nuevo Mesero',
                input: 'text',
                text: 'Ingrese el nombre del nuevo mesero',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí el nombre del nuevo mesero',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba el nombre del nuevo mesero!!!'
                    }
                }
            }
        )

        const { value: edadMeseroNuevo} = await Swal.fire(
            {
                title: 'Edad del Nuevo Mesero',
                input: 'number',
                text: 'Ingrese la edad en años del nuevo mesero',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí la edad en años del nuevo mesero',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba la edad en años del nuevo mesero!!!'
                    }
                }
            }
        )

        const { value: expMeseroNuevo} = await Swal.fire(
            {
                title: 'Experiencia del Nuevo Mesero',
                input: 'number',
                text: 'Ingrese la experiencia en años del nuevo mesero',
                icon: `info`,
                confirmButtonText: `Siguiente`,
                inputPlaceholder: 'Escriba aquí la experiencia en años del nuevo mesero',
                allowOutsideClick: false,
                inputValidator: (value) => {
                    if (!value) {
                        return 'Por favor escriba la experiencia en años del nuevo mesero!!!'
                    }
                }
            }
        )

        console.log ("Nombre mesero nuevo: ", nombreMeseroNuevo);
        console.log ("Edad mesero nuevo: ", edadMeseroNuevo);
        console.log ("Experiencia mesero nuevo: ", expMeseroNuevo);

        let agregarMesero = new meseroNuevo (nombreMeseroNuevo, edadMeseroNuevo, expMeseroNuevo);
        meseros.push(agregarMesero)
        //console.log ("Arreglo Meseros: ", meseros);

        let mostrarNombreMeseroNuevo = document.createElement("h6");
        mostrarNombreMeseroNuevo.innerHTML=`Nombre del nuevo mesero: ${nombreMeseroNuevo}.`;
        document.body.appendChild(mostrarNombreMeseroNuevo);

        let mostrarEdadMeseroNuevo = document.createElement("h6");
        mostrarEdadMeseroNuevo.innerHTML=`Edad del nuevo mesero: ${edadMeseroNuevo} años.`;
        document.body.appendChild(mostrarEdadMeseroNuevo);

        let mostrarExpMeseroNuevo = document.createElement("h6");
        mostrarExpMeseroNuevo.innerHTML=`Experiencia del nuevo mesero: ${expMeseroNuevo} años.`;
        document.body.appendChild(mostrarExpMeseroNuevo);

        let mostrarArregloMeseros = document.createElement("h6");
        mostrarArregloMeseros.innerHTML=`Se agregaron los datos del nuevo mesero en el arreglo "Meseros" <br> <br>`;
        document.body.appendChild(mostrarArregloMeseros);

        menu();

    })()

}





function gracias()
{

    Swal.fire(
        {
            position: 'center',
            icon: 'success',
            title: 'Gracias!!!',
            text: 'Los datos se han guardado exitosamente',
            showConfirmButton: true,
            confirmButtonText: `Revisar informacion`,
            confirmButtonColor: '#d33',
            allowOutsideClick: false
        }
    )

    imprimirArreglos();
}

function imprimirArreglos()
{ 
    //Imprimir Arreglo Platillos
    let impArregloPlatillos = document.createElement("h6");
    impArregloPlatillos.innerHTML=`<b>Arreglo "Platillos"</b>`;
    document.body.appendChild(impArregloPlatillos);


    platillos.forEach((item, index) => {
        let div = document.createElement("h6");
        div.className = `mostrar_div_${index + 1}`;
        div.id = `mostrar_div_${index + 1}`;
        div.innerHTML = `Nombre Platillo: ${item.nombrePlatillo} - Precio Platillo: ${item.precioPlatillo}`;
        document.body.appendChild(div);
    });


    //Imprimir Arreglo Bebidas
    let impArregloBebidas = document.createElement("h6");
    impArregloBebidas.innerHTML=`<br><b>Arreglo "Bebidas"</b>`;
    document.body.appendChild(impArregloBebidas);


    bebidas.forEach((item, index) => {
        let div = document.createElement("h6");
        div.className = `mostrar_div_${index + 1}`;
        div.id = `mostrar_div_${index + 1}`;
        div.innerHTML = `Nombre Bebida: ${item.nombreBebida} - Precio Bebida: ${item.precioBebida}`;
        document.body.appendChild(div);
    });


    //Imprimir Arreglo Postres
    let impArregloPostres = document.createElement("h6");
    impArregloPostres.innerHTML=`<br><b>Arreglo "Postres"</b>`;
    document.body.appendChild(impArregloPostres);


    postres.forEach((item, index) => {
        let div = document.createElement("h6");
        div.className = `mostrar_div_${index + 1}`;
        div.id = `mostrar_div_${index + 1}`;
        div.innerHTML = `Nombre Postre: ${item.nombrePostre} - Precio Postre: ${item.precioPostre}`;
        document.body.appendChild(div);
    });


    //Imprimir Arreglo Meseros
    let impArregloMeseros = document.createElement("h6");
    impArregloMeseros.innerHTML=`<br><b>Arreglo "Meseros"</b>`;
    document.body.appendChild(impArregloMeseros);


    meseros.forEach((item, index) => {
        let div = document.createElement("h6");
        div.className = `mostrar_div_${index + 1}`;
        div.id = `mostrar_div_${index + 1}`;
        div.innerHTML = `Nombre Mesero: ${item.nombre} - Edad Mesero: ${item.edad} - Experiencia Mesero: ${item.experiencia}`;
        document.body.appendChild(div);
    });
}

