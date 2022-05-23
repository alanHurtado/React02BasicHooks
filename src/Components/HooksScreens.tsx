import { Counter } from "./HooksExamples/Counter";

export const HooksScreens = () => {
  return (
    <div className="columns is-centered">
      <div className="column is-4 is-centered">
        <h1>Ejemplos Hooks</h1>
        <h3> Ejemplo Use State</h3>
        <Counter />
      </div>
    </div>
  );
};
