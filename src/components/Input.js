import React, { useState } from 'react';

export const Input = () => {
  const [text, setText] = useState('');

  const handleChange = ({ target }) => {
    setText(target.value);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button>save</button>
    </div>
  );
};
