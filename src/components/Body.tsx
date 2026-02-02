import React from 'react'
import { Formulario } from './Formulario'
import { PanelControl } from './PanelControl'

export const Body = () => {
  return (
    <>
        <div className='flex '>
            <PanelControl></PanelControl>
            <Formulario></Formulario>
        </div>
    </>
  )
}
