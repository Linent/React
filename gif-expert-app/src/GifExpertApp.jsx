import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//rafc
export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1 className="text-3xl font-bold pb-5">GifExpertApp</h1>
      <AddCategory
               onNewCategory={(event) => onAddCategory(event)}
      />
     
    
        {categories.map((category) => (
          <GifGrid key={ category } category={ category } />
        ))}
      
    </>
  );
};
