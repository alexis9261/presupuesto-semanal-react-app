import React, {useState} from "react";
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'

const Formulario = ({ setGasto, setCrearGasto }) => {
    // Inicializo los state
    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    // funcion que agrega el gasto 
    const agregarGasto = (event) => {
        event.preventDefault();

        // validar
        if( cantidad < 1 || isNaN( cantidad ) || nombre.trim() === '' ){
            setError(true);
            return;
        }

        setError(false);

        // construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // pasar el gasto al componente principal
        setGasto(gasto);
        setCrearGasto(true);

        // resetear el formulario
        setNombre('');
        setCantidad(0);

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gatos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={ event => setNombre(event.target.value )}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={ event => setCantidad( parseInt(event.target.value, 10) )}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}


Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;