import { ErrorMessage } from 'formik';
import React from 'react';

const kErrorMessage = ({ name }) => {
  return (
    <div style={{ color:"red" }}>
      <br/> <br/>
      <ErrorMessage name={name}/>     
    </div>
  )
}

export default kErrorMessage;
