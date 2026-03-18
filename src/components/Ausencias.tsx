import React from 'react'
import tailwindcss from '@tailwindcss/vite';



export const Ausencias = () => {

  let fech_actual = "21 de enero de 2026";

  return (
    <>
        <div>
            <h2>Historial de Ausencias Justificadas</h2>
            <p>volver</p>

        </div>
        <table>
            <tr>
                <td>Periodo ausencia</td>
                <td>Estado</td>
                <td>Última modificación</td>
                <td>Anexo V</td>
                <td>Adjuntos</td>
                <td>Acciones</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>

     
    </>


  )
}
