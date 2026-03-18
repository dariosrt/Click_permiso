import React, { useState, type ChangeEvent, type FormEvent } from 'react'
import tailwindcss from '@tailwindcss/vite';

type TurnoType = "diurno" | "nocturno";

interface Formulario {
    dia_solicitado: string;
    telefono: number;
    jornadas: string;
    num_horas: number;
    turno: TurnoType;
    num_dias: number;
    solicitud_retribucion: boolean;
    causa_sobrevenida: boolean;
}

interface FormularioError {
    dia_solicitado?: string;
    telefono?: string;
    jornadas?: string;
    num_horas?: string;
    turno?: string;
    num_dias?: string;
    solicitud_retribucion?: string;
    causa_sobrevenida?: string;
}

interface BackResponse {
    message: string;
}
// Día solicitado date,
// jornadas varchar,
// num horas docencia number,
// telefono number(9),
// turno (diurna, nocturna),

// num días de permisos solicitados en el centro: num,

export default function Fecha() {
    const fecha = new Date();

    const dia = fecha.getDate();
    const año = fecha.getFullYear();

    const meses = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];

    const mes = meses[fecha.getMonth()];

    return (
        <span>{dia} de {mes} de {año}</span>
    );
}


export const Formulario = () => {

    const [form, setForm] = useState<Formulario>({
        dia_solicitado: new Date().toISOString().split("T")[0],
        telefono: 0,
        jornadas: "",
        num_horas: 0,
        turno: "diurno",
        num_dias: 0,
        solicitud_retribucion: false,
        causa_sobrevenida: false
    });

    const [formErrors, setFormErrors] = useState<FormularioError>();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
        setFormErrors(validate());
    };

    const validate = (): FormularioError => {
        console.log("SE ejecuta")
        const errors: FormularioError = {};

        const fechaActual = new Date().toISOString().split("T")[0];


        if (form.dia_solicitado < fechaActual) {
            errors.dia_solicitado = "La fecha no puede ser anterior al dia de hoy."
        }

        return errors

    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        setFormErrors(validate);

        if (Object.keys(formErrors ?? {}).length === 0) {
            try {
                const response = await fetch("http://localhost:3000/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({...form})
                });

                console.log(response)
            } catch (error) {

            }
        }
    }

    return (
        <>
            <div className='grid gap-[10px] p-[10px] w-[800px] h-[600px] border-2 border-b-black'>
                {/* Header */}

                <div className='flex content-between justify-between'>
                    <div>
                        <span>Solicitar Día: </span>
                        <span className='text-gray-800'>{Fecha()}</span>
                    </div>
                    <p>volver</p>

                </div>

                {/* Body */}
                <div className='grid contain-content '>
                    <form onSubmit={handleSubmit} className='grid'>
                        <div className='flex justify-around'>
                            <div className='grid'>
                                <label>Día solicitado</label>
                                <input
                                    name='dia_solicitado'
                                    value={form.dia_solicitado}
                                    onChange={handleChange}
                                    type="date"
                                    className='border-2 rounded-md border-gray-400'
                                />
                                {formErrors?.dia_solicitado && <p className='text-red-600'>{formErrors.dia_solicitado}</p>}
                                <label>Jornadas</label>
                                {/* <input name='jornadas' type="text" className={`${input_style}!`} /> */}
                                <input
                                    name='jornadas'
                                    type="text"
                                    onChange={handleChange}
                                    className='border-2 rounded-md border-gray-400'
                                />


                                <label>Núm de horas de docencia directa y guardias afectadas</label>
                                <input
                                    type="text"
                                    className='border-2 rounded-md border-gray-400'
                                />
                            </div>

                            <div className='grid'>
                                <label>Números de teléfono</label>
                                <input
                                    type="text"
                                    className='border-2 rounded-md border-gray-400'
                                />

                                <label>Turno solicitado</label>
                                <select name="turno">
                                    <option value="Diurna"></option>
                                    <option value="Nocturna"></option>
                                </select>

                                <label>Núm de días de permisos solicitados en el centro</label>
                                <input
                                    type="text"
                                    className='border-2 rounded-md border-gray-400'
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                            />
                            <span>Estoy solicitando un día de permiso retribuido</span>
                        </div>

                        <div>
                            <input
                                type="checkbox"
                            />
                            <span>¿Causa sobrevenida?</span>
                        </div>

                        <label>Justifica la causa sobrevenida</label>
                        <textarea
                            name="justificacion"
                            className='bg-gray-200'>
                        </textarea>

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
