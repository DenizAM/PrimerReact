////Exportando archivo
////Para que sea accedido desde otros archivos
////Con palabra EXPORT antes de funcion


/*FUNCION 6___________________________________________________________*/
//// APLICANDO ESTILOS CSS, son estilos en forma de objetos INLINE
////Emular la sintáxis que tienen los botones
////PROPIEDAD ESPECIAL CHILDREN
export function ButtonExportado( { children } ){
    ////Retornar el titulo que se pasa por párametro  
    //// Doble llave para incrustar javacsript
      return( <button
              style={{
                color: "pink",
                fontSize: "2rem",
                background:"green",
              }}>  {children}</button>);
  }
  