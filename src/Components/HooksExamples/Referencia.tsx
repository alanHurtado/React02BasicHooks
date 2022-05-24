import { useRef } from "react";


export const Referencia = () => {
    const inputRef:  any = useRef();
  
    const handleClick = () => {
       (document.querySelector('input') as HTMLInputElement).focus();      
    };
    
    const handleClickRef = () => {
        (inputRef.current as HTMLInputElement).select();      
     };

  return (
    <div>
      <input ref = { inputRef } className="input m-5 p-5" placeholder="Nombre: " />
      <button className="button is-secondary" onClick={()=>handleClick()}>
        Focus
      </button>
      <button className="button is-secondary" onClick={()=>handleClickRef()}>
        Focus con Ref
      </button>
    </div>
  );
};
