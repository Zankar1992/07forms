import React from 'react'
import { Field, Form } from 'formik';

const FormParth = () => {
  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <Form>
          <label htmlFor="firstname">FirstName</label>
          <Field
            classname="form-control"
            type="text"
            name="firstname"
          />
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div >
  )
}

export default FormParth;
