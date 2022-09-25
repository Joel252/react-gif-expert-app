import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory /* setCategories */ }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length < 1) return;

    // setCategories((categories) => [...categories, inputValue]);
    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="programming"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategory;
