////Exportando archivo
////Para que sea accedido desde otros archivos
////Con palabra EXPORT antes de funcion

//Importando MODULO
import { ButtonExportado } from "./ButtonModulo";


/*FUNCION 4___________________________________________________________*/
//SINTAXIS DE DESTRUCTURAR, SEGUNDA OPCION lo mismo que arriba en una sola
export function MyappExportada({titulo1, contenido1}){ //DEstructurando las propiedades dentro de paréntesis de la función

    return(
    //Elemento PADRE <> </>
    //Reutilizando codigo de funcion Button
    <> 
      <h1>HOLA MUNDO NUEVAMENTE REACT! con props organizados{12/6*34567+2323-3242}</h1> 
      <p> ipsem jndskad  akdjn andka dna dka kdj</p>
      <h1 className='red'>{titulo1} HOLA </h1>
      <p tabIndex={2*76543/5432}>{contenido1} adios </p>
      <button disabled>OKKKKISSSS</button>
      <img src='https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen.jpg' alt='asdfg' />
        
      <ButtonExportado>odieee</ButtonExportado>
      <ButtonExportado>Chimu</ButtonExportado>
  </>
  )
  }
  
