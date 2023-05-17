import React from 'react';
import ElementForm from './ElementForm';

const AddElement = () => {
  const handleOnSubmit = (entrada) => {
    console.log(entrada);
  };

  return (
    <React.Fragment>
      <ElementForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddElement;