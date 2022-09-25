import React, { useState } from 'react';

import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['programming']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>GifExperApp</h1>

      {/* <AddCategory setCategories={setCategories} /> */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* <button onClick={addCategory}>Add</button> */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
