import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        
        //setCounter( counter + 1 );
        setCounter( (c) => c + 1 );
    }
    const handleSubstract = ()=> {
        setCounter( (c) => c - 1 );
    }
    const Reset = () => {
        setCounter( value )
    }
    return (
    <>
      <h1>Counter App</h1>
      <p> { counter } </p>
      <button onClick={ handleAdd }> +1 </button>
      <button onClick={ handleSubstract }> -1 </button>
      <button onClick={ Reset }> Reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 10,
};
