import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

export const MltiplesHooks = () => {
  const { increment, state } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  if (data) {
    return (
      <div>
        <h3>Multiples Hooks</h3>

        {loading ? (
          <div>Loading ....</div>
        ) : (
          <blockquote>
            <p> Hola {data[0].quote}</p>
            <footer>Name: {data[0].author} </footer>
          </blockquote>
        )}
        <button className="button is-primary" onClick={()=>increment()}>
          Nuevo
        </button>
      </div>
    );
  } else {
    return <div>Loading ....</div>
  }
};
