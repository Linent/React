import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    const [ inputValue, setiInputValue ] = useState('');
    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setiInputValue(target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault();
        const newCategory = inputValue.trim()
        if(newCategory.length<=1) return;
        onNewCategory( newCategory );
        //setCategories( [newCategory, ...categories,inputValue]);
        setiInputValue('');
    }
  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        < input className="mb-5 w-full"
            type='text'
            placeholder='Buscar gifs...'
            value = { inputValue }
            onChange={ onInputChange }
            required
        />
    </form>
  )
}

