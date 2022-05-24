import { Counter } from "./HooksExamples/Counter";
import { MltiplesHooks } from "./HooksExamples/MltiplesHooks";
import { Referencia } from "./HooksExamples/Referencia";
import { SimpleForm } from "./HooksExamples/SimpleForm";


export const HooksScreens = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-4 is-centered">
        <h1>Ejemplos Hooks</h1>
        <h3> Ejemplo Use State</h3>
        <Counter />
        <hr/>
        <h3> Ejempo useEffect</h3>
        <SimpleForm />
        <h3> Mltiples Hooks useFetch </h3>
        <MltiplesHooks />
        <h3> useRef </h3>
        <Referencia />
      
      </div>
    </div>
  );
};
