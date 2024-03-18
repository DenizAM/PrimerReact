import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.jsx'
import './index.css'

//IMPORTANDO con control + espacio = importacion automatica
import { MyappExportada } from './assets/MiNuevoComponente.jsx';
import App from './App.jsx';



/// RECORDAR siempre cerrar etiquetas
/// En algunos casos como <img /> se tiene que poner la barra
/// Si no marcara error

/*ELEMENTO 1___________________________________________________________*/
//// JSX ES MUY ESTATICO--> MEJOR COMPONENTES
////No esta bien se necesita un elemento padre
//--> se necesita a un padre aqui <--- const elemento = <h1>HOLA MUNDO NUEVAMENTE REACT!</h1> <p> ipsem jndskad  akdjn andka dna dka kdj</p>;
//Como un div
const elemento1 = (
////Con las llaves {} podemos incluir codigo javascript en el HTML
<div>
    <h1>HOLA MUNDO NUEVAMENTE REACT! {2+2} </h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
</div>
);



/*ELEMENTO 2___________________________________________________________*/
const elemento2 =( 
//// o usar un fragment en REACT <> </> elementos vacios
<>
    <h1>HOLA MUNDO NUEVAMENTE REACT! {12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    ////Class en JS y ClassName en JSX
    <h1 className='red'>HOLISSSSSSSSSSSSSSSSS</h1>
    ////Notación camello minuscula + mayuscula
    <p tabIndex={2*76543/5432}>Contenido</p>
    ////Si no se pasa ningun valor al atributo por default es true
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)



/*FUNCION 1___________________________________________________________*/
////COMPONENTES: son una funcion que retornan JSX
////Nombre de función empezando siempre en mayúscula para diferenciar de funciones nativas de react
////Se pueden recibir parámetros por ser función
function Myapp1(props){
  console.log(props);
return(
  <>
    <h1>HOLA MUNDO NUEVAMENTE REACT! SOLO Myapp1 {12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>{props.titulo}</h1>
    <p tabIndex={2*76543/5432}>{props.contenido}</p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)
}



/*FUNCION 2___________________________________________________________*/
////CON MEJOR ESTRUCTURA EN LOS PROPS
////COMPONENTES: son una funcion que retornan JSX, y que pueden ser reutilizados, a comparacion de los elementos
////Nombre de función empezando siempre en mayúscula para diferenciar de funciones nativas de react
////Se pueden recibir parámetros por ser función
function Myapp2(props){

////SIGUIENTES LINEAS NECESARIAS para DESTRUCTURAR
  ////console.log(props); ////--> probando

  //const titulo = props.titulo1;
  //const contenido = props.contenido2;

//SINTAXIS DE DESTRUCTURAR, lo mismo que arriba en una sola
const {titulo1, contenido2} = props;
return(
  <>
    <h1>HOLA MUNDO NUEVAMENTE REACT! con propiedades organizados{12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>{titulo1}</h1>
    <p tabIndex={2*76543/5432}>{contenido2}</p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
</>
)
}



/*FUNCION 3___________________________________________________________*/
//SINTAXIS DE DESTRUCTURAR, SEGUNDA OPCION lo mismo que arriba en una sola
function Myapp3(props){

  const titulo = props.titulo2;
  const contenido = props.contenido1;

  return(
  //Elemento PADRE <> </>
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


/*FUNCION 4___________________________________________________________*/
//SINTAXIS DE DESTRUCTURAR, SEGUNDA OPCION lo mismo que arriba en una sola
function Myapp4({titulo1, contenido1, contenido2}){ //DEstructurando las propiedades dentro de paréntesis de la función

  return(
  //Elemento PADRE <> </>
  //Reutilizando codigo de funcion Button
  <> 
    <h1>HOLA MUNDO NUEVAMENTE REACT! con props organizados{12/6*34567+2323-3242}</h1> 
    <p> ipsem jndskad  akdjn andka dna dka kdj</p>
    <h1 className='red'>{titulo1} HOLA </h1>
    <p tabIndex={2*76543/5432}>{contenido1} adios </p>
    <p tabIndex={2*76543/5432}>{contenido2} adios </p>
    <button disabled>OKKKKISSSS</button>
    <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />

    <Button text = "HOLIS-ADIOS" />
    <Button text = "CHETIS" />
    <Button text = "PEIKER" />


    <Button1>odieee</Button1>
    <Button2>Chimu</Button2>
</>
)
}


/*FUNCION 4___________________________________________________________*/
////Emular la sintáxis que tienen los botones
function Button( { text } ){
  //Retornar el titulo que se pasa por párametro  
    return <button>{text}</button>;
}


/*FUNCION 5___________________________________________________________*/
////Emular la sintáxis que tienen los botones
////PROPIEDAD ESPECIAL CHILDREN
function Button1( { children } ){
  //Retornar el titulo que se pasa por párametro  
    return <button>{children}</button>;
}


/*FUNCION 6___________________________________________________________*/
//// APLICANDO ESTILOS CSS, son estilos en forma de objetos INLINE
////Emular la sintáxis que tienen los botones
////PROPIEDAD ESPECIAL CHILDREN
function Button2( { children } ){
  ////Retornar el titulo que se pasa por párametro  
  //// Doble llave para incrustar javacsript
    return (<button
            style={{
              color: "pink",
              fontSize: "2rem",
              background:"white",
            }}>  {children}</button>);
}

/*Mostrando en pantalla 1___________________________________________________________*/
/*ReactDOM.createRoot(document.getElementById('root')).render(
////Sintaxis con ayuda de babel donde esta funcion (generar DOM)
  ////React.createElement("h1", null, "Soy el titulo con babel")
  ////Sintaxis similar a HTML que se convierte a Javascript, se manda al navegador,este lo lee y genera el DOM correspondiente
  //<h1>SOY yo nuevamente</h1>
  ////RENDERIZANDO a la constante ELEMENTO
elemento1
)*/



/*Mostrando en pantalla 2___________________________________________________________*/
/*ReactDOM.createRoot(document.getElementById('root')).render(
////RENDERIZANDO a la constante ELEMENTO
  elemento2
  )*/



/*Mostrando en pantalla 3___________________________________________________________*/
/*  ReactDOM.createRoot(document.getElementById('root')).render(
   ////No se invoca como funcion
   ////Myapp()
   ////Si no con <> p/e <Myapp />
   <>
   <Myapp1></Myapp1>
   </>
  );*/



  /*Mostrando en pantalla 3___________________________________________________________*/
 /* ReactDOM.createRoot(document.getElementById('root')).render(
    //No se invoca como funcion
    //Myapp()
    //Si no con <> p/e <Myapp />
    //Pasando propiedades o PROPS
    //Estructura < + funcion + clave del atributo + valor del atributo + >
    <>
    <MyappExportada titulo1="Hello world ODIE! TITULO 1" contenido1="CONTENIDO 1Lotem CHIMUU ipsum"/>
    <MyappExportada titulo2="Deniz world! TITULO 2" contenido2="CONTENIDO 2 Chetin ipsum"/>
    </>
   )*/

   
  /*Mostrando en pantalla 3___________________________________________________________*/
 // ReactDOM.createRoot(document.getElementById('root')).render(
    //No se invoca como funcion
    //Myapp()
    //Si no con <> p/e <Myapp />
    //Pasando propiedades o PROPS
    //Estructura < + funcion + clave del atributo + valor del atributo + >
   /* <>
    <MyappExportada titulo1="Hello world ODIE! TITULO 1" contenido1="CONTENIDO 1Lotem CHIMUU ipsum"/>
    </>
   )*/


   ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
    <MyappExportada titulo1="Hello world ODIE! TITULO 1" contenido1="CONTENIDO 1Lotem CHIMUU ipsum"/>
   );


  /*Mostrando en pantalla 4___________________________________________________________*/
///OTRA FORMA DE IMPRIMIR
 /*  const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
        <MyappExportada titulo1="Hello world ODIE! TITULO 1" contenido1="CONTENIDO 1Lotem CHIMUU ipsum"/>
     </React.StrictMode>
   );*/
/*___________________________________________________________*/
/*
  const Component = ( ) => {
    const [counter, setcounter] = React.useState(0);

      return(
        <button onClick={() => setcounter()}>
          I love REACT a {counter} !
        </button>
      );
  };
*/