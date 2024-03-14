import { useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ( { category } ) => {

    const [counter, setCounter] = useState(10)
    getGifs(category);
  return (
    <>
            <h3>{ category }</h3>
        <div className="flex items-center p-2">
            <h5 className="mr-4 ">{ counter }</h5>
            <button className="button" onClick={ ()=> setCounter( counter+1 ) } >+1</button>
        </div>
    </>
  )
}
