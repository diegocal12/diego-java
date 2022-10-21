let amigos=[];

let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");


  


let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}
function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto,index)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />Detalles</button>
                                                  <button class="eliminarContacto"indice=${index}">Borrar</button>`;
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value);

            });
        }
        botones=document.getElementsByClassName("eliminarcontacto");
        for (let i =0; i< botones.length; i++){
            const element =botones[i];
            element.addEventListener("click",()=>{
                amigo.splice(element.getAttribute("click",()=>{

                }))
            })
        }
    }



    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>";
    }
}

function showDetalles(tel){
    let Detalles=document.getElementById("detallesAmigo");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel){
            return a;

        }
    });
   Detalles.innerHTML=`<img src="${amigos.foto}" alt="">
    <h3>${amigos.nombre}</h3>
   <p><span>Telefono:</span>${amigo.foto}</p>
   <p><span>correo:</span>${amigo.correo}</p>
     <button id="cerrar">cerrar</button>`;
    Detalles.classList.remove("ocultar");
let cerrar=document.querySelector("#cerrar");

     
     cerrar.addEventListener("click",(event)=>{
        Detalles.classList.add("ocultar")
     })

}


btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
});

var validation = "";

function validateForm(contacto) {
   
//Declaracion 
// let validation;
    //inicializacion
// validation = "";



// Creas un array con el formulario 



//revisar si alguno viene vacio
if(contacto['nombre'] == "")
validation += "Nombre es requerido ";
if(contacto['telefono'] == "")
validation += "Telefono es requerido ";
if(contacto['correo'] == "")
validation += "Correo es requerido ";
if(contacto['foto'] == "")
validation += "Foto es requerido ";

// Regex (Expreciones regulares)
let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let email = /(^\w.*@\w+\.\w)/;

if(!contacto['telefono'].match(phoneno)) {
validation += "Este no es un telefono Valido "};

// Revisar que un amigo no tenga este telefono
// amigos.find()
// {
// };

if(!contacto['correo'].match(email)) {
validation += "Este no es un correo Valido"};



const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  if (usuario.value === "") {
    alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
    return false;
  }
  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}

submitBtn.addEventListener('click', validate);




//final

amigos.push(contacto);
limpiar();
pintar();
event.preventDefault();





 });
