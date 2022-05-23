
import { useCounter } from '../../hooks/useCounter';

export const Counter = () => {
  const {increment, decrement, reset, state}= useCounter()
    return (
      <>
      <h3 className='title is-2'> {state}</h3>
    <div className="field is-grouped">
    <p className="control">
      <button className="button is-link"
      onClick={()=>decrement(2)}>
        -1
      </button>
    </p>
    <p className="control">
      <button className="button"
      onClick={reset}>
        Reset
      </button>
    </p>
    <p className="control">
      <button className="button is-danger"
      onClick={()=>increment()}>
        +1
      </button>
    </p>
  </div>
      </>
  )
}
