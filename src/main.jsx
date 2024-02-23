import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




// JSX ES MUY ESTATICO--> MEJOR COMPONENTES
//No esta bien se necesita un elemento padre
//const elemento = <h1>HOLA MUNDO NUEVAMENTE REACT!</h1> <p> ipsem jndskad  akdjn andka dna dka kdj</p>;
//Como un div
/*const elemento1 = (
//Con las llaves podemos incluir codigo javascript en el HTML
<div>
    <h1>HOLA MUNDO NUEVAMENTE REACT! {2+2} </h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
</div>
);

const elemento2 =(
//o usar un fragment en REACT
<>
    <h1>HOLA MUNDO NUEVAMENTE REACT! {12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>HOLISSSSSSSSSSSSSSSSS</h1>
    <p tabIndex={2*76543/5432}>Contenido</p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)*/

//COMPONENTES: son una funcion que retornan JSX
//Nombre de función empezando siempre en mayúscula para diferenciar de funciones nativas de react
//Se pueden recibir parámetros por ser función
/*function Myapp(props){
  console.log(props);
return(
  <>
    <h1>HOLA MUNDO NUEVAMENTE REACT! {12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>{props.titulo}</h1>
    <p tabIndex={2*76543/5432}>{props.contenido}</p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)
}*/

//CON MEJOR ESTRUCTURA EN LOS PROPS
//COMPONENTES: son una funcion que retornan JSX
//Nombre de función empezando siempre en mayúscula para diferenciar de funciones nativas de react
//Se pueden recibir parámetros por ser función
/*function Myapp(props){
  //console.log(props);
  //const titulo = props.titulo2;
  //const contenido = props.contenido2;

//SINTAXIS DE DESTRUCTURAR, lo mismo que arriba en una sola
const {titulo, contenido} = props;
return(
  <>
    <h1>HOLA MUNDO NUEVAMENTE REACT! con props organizados{12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>{titulo}</h1>
    <p tabIndex={2*76543/5432}>{contenido}</p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)
}*/

//SINTAXIS DE DESTRUCTURAR, SEGUNDA OPCION lo mismo que arriba en una sola
function Myapp({titulo, contenido} ){
return(
  <>
    <h1>HOLA MUNDO NUEVAMENTE REACT! con props organizados{12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>{titulo}</h1>
    <p tabIndex={2*76543/5432}>{contenido}</p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)
}

/*ReactDOM.createRoot(document.getElementById('root')).render(
//Sintaxis con ayuda de babel donde esta funcion (generar DOM)
  //React.createElement("h1", null, "Soy el titulo con babel")
  //Sintaxis similar a HTML que se convierte a Javascript, se manda al navegador,este lo lee y genera el DOM correspondiente
  //<h1>SOY yo nuevamente</h1>
  //RENDERIZANDO a la constante ELEMENTO
elemento1
)*/

/*ReactDOM.createRoot(document.getElementById('root')).render(
//RENDERIZANDO a la constante ELEMENTO
  elemento2
  )*/

  ReactDOM.createRoot(document.getElementById('root')).render(
   //No se invoca como funcion
   //Myapp()
   //Si no con <>
   //Pasando propiedades o PROPS
   //Estructura funcion + clave del atributo + valor del atributo
   <>
   <Myapp titulo="Hello world ODIE!" contenido="Lotem CHIMUU ipsum"/>
   <Myapp titulo2="Deniz world!" contenido2="Chetin ipsum"/>
   </>
  )