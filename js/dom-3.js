//DOM
function ejecutaDom()
{   
    //Cambia formato de idioma de "en" a "es-MX"
    document.documentElement.setAttribute("lang","es-MX");
    console.log(document.documentElement.lang);

    //Cambia el color de fondo del HTML
    let bgc = document.getElementById("bodyBgc");
    console.log(bgc);

    bgc.style.backgroundColor = "rgb(212, 210, 48)";
    console.log(bgc);

    //Cambia el tamaño y forma de los botones
    
    //Boton Restaurante
    let cambiaBtn1 = document.getElementById("btn1");
    console.log(cambiaBtn1);

    cambiaBtn1.style.width = "300px";
    cambiaBtn1.style.borderRadius = "1rem"

    //Boton Administración
    let cambiaBtn2 = document.getElementById("btn2");
    console.log(cambiaBtn2);

    cambiaBtn2.style.width = "300px";
    cambiaBtn2.style.borderRadius = "1rem"

    //Boton EjecutarDOM
    let cambiaBtn3 = document.getElementById("btn3");
    console.log(cambiaBtn3);

    cambiaBtn3.style.width = "300px";
    cambiaBtn3.style.borderRadius = "1rem"

    //Boton EjecutarFetch
    let cambiaBtn4 = document.getElementById("btn4");
    console.log(cambiaBtn4);

    cambiaBtn4.style.width = "300px";
    cambiaBtn4.style.borderRadius = "1rem"

    //Borde al primer elemento de la clase card
    document.querySelectorAll(".card-img-top").forEach(element => {
        element.style.border ="3px solid black";
        
    });
}


//FETCH
function ejecutaFetch()
{
    //FUENTE PARA FETCH: https://www.thecocktaildb.com/api.php?ref=apilist.fun

    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

    fetch(url)
    .then((respuestaFetch)=>respuestaFetch.json())
    .then((data)=>{
        mostrarMenuFetch(data.drinks);
    });
    
}

function mostrarMenuFetch(data)
{
    console.log(data);

    const nodo = document.querySelector("#divFetch")
    data.forEach(element=>{
        const div = document.createElement("div");
        div.innerHTML=`<img src=${element.strDrinkThumb} style="width: 300px;height: 300px;"><br>${element.strDrink}`
        nodo.appendChild(div)
    })
}