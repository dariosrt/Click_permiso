import React from 'react'
import tailwindcss from '@tailwindcss/vite';

export const Formulario = () => {

  let fech_actual = "21 de enero de 2026";

  return (
    <>
        <div className='grid gap-[10px] p-[10px] w-[800px] h-[600px] border-2 border-b-black'>
            {/* Header */}

            <div className='flex content-between justify-between'>
                <div>
                    <span>Solicitar Día:</span>
                    <span className='text-gray-800'>{fech_actual}</span>
                </div>
                <p>volver</p>

            </div>

            {/* Body */}
            <div className='grid contain-content '>
                <form action="" className='grid'>
                    <div className='flex justify-around'>
                        <div className='grid'>
                            <label>Día solicitado</label>
                            <input name='dia_solicitado' type="date" className='border-2 rounded-md border-gray-400'/>

                            <label>Jornadas</label>
                            {/* <input name='jornadas' type="text" className={`${input_style}!`} /> */}
                            <input name='jornadas' type="text" className='border-2 rounded-md border-gray-400' />


                            <label>Núm de horas de docencia directa y guardias afectadas</label>
                            <input type="text" className='border-2 rounded-md border-gray-400' />
                        </div>

                        <div className='grid'>
                            <label>Números de teléfono</label>
                            <input type="text" className='border-2 rounded-md border-gray-400' />

                            <label>Turno solicitado</label>
                            <select name="turno">
                                <option value="Diurna"></option>
                                <option value="Nocturna"></option>
                            </select>

                            <label>Núm de días de permisos solicitados en el centro</label>
                            <input type="text" className='border-2 rounded-md border-gray-400' />
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" value={"Estoy solicitando un día de permiso retribuido"}/>
                        <span>Estoy solicitando un día de permiso retribuido</span>
                    </div>

                    <div>
                        <input type="checkbox" value={"¿Causa sobrevenida"}/>
                        <span>¿Causa sobrevenida</span>
                    </div>

                    <label>Justifica la causa sobrevenida</label>
                    <textarea name="justificacion" className='bg-gray-200'></textarea>

                    <h4>Documento Justificativo en PDF</h4>
                    <div className='flex'>
                        <button>Seleccionar archivo</button>
                        <p className='text-gray-800'>nada seleccionado</p>
                    </div>
                </form>
            </div>

            {/* Footer */}

            <div className='flex gap-[10px] justify-end items-center h-[60px]'>
                <button className='bg-gray-300 rounded-md w-[90px] h-[36px] hover:bg-gray-400 '>Cancelar</button>
                <button className='bg-blue-800 rounded-md w-[128px] h-[36px] text-white hover:bg-blue-900'>Guardar Solicitud</button>
            </div>
        </div>
    </>


  )
}
