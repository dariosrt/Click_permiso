import React from 'react'

export const Header = () => {

  let textBoton = "Pepe";
  let fech_actual = "21 de enero de 2026";
  return (
    <>

      <div className='flex justify-between h-[64px] border-2 b'>
        <img src="src/imgs/logo_alb.png" height={60} />
        <div className='flex justify-between items-center w-[375px]'>
          <h1>Ies Albarregas</h1>
          <p>Hola miserable pila de secretos</p>
        </div>
      </div>

    
    </>


  )
}
