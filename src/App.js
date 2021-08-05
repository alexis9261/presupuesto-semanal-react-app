import { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';


function App() {

  // Definir el state del presupuesto
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrar_pregunta, setMostrarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [ crear_gasto, setCrearGasto ] = useState(false);

  // Use effect que actualiza el restante
  useEffect( () => {

    // agrega el nuevo presupuesto
    if(crear_gasto){
      setGastos([
        ...gastos,
        gasto
      ])
    }

    // resta del prsupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    setRestante(presupuestoRestante)


    // resetear a false
    setCrearGasto(false);
  }, [gasto, crear_gasto, gastos, restante] );


  return (
    <div className="container">
      <header>
      <h1>Gasto Semanal</h1>

      <div className="contenido-principal contenido">
        { mostrar_pregunta 
          ? (
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
            )
         : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
            )
        }


      </div>


      </header>
    </div>
  );
}

export default App;
