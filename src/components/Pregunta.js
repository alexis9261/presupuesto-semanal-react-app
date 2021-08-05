import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'


const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

    // Estate 
    const [ cantidad, setCantidad ] = useState(0);
    const [error, setError ] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = (event) => {
        setCantidad( parseInt(event.target.value) );
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = (event) => {
        event.preventDefault();

        // validacion
        if( cantidad < 0 || isNaN( cantidad ) ){
            setError(true);
            return;
        }

        // no hay error, paso la validadcion
        setError(false);


        // 
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setMostrarPregunta(false);


    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error  mensaje="El Presupuesto es incorrecto"/> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca el presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    className="button button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;