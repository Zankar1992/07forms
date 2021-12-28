import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormTwo = () => {
  // using formik hooks
  const formik = useFormik({
    initialValues:{ firstname: ""},
    validationSchema:Yup.object({
      firstname: Yup
      .string()
      .required("FirstName is required")
    }),
    onSubmit:values => {
      console.log(values)
    }
  })

  return (
    <div className="container">
      <div className="col-md-12 mt-5">
        <form onSubmit={formik.handleSubmit}>
          <label htmlfor="firstname">First name</label>
          <input // useformik method use kariye tyare field nd badle input
            className="form-control"
            type="text"
            name="firstname"
            //  useformik ni helper method getFieldProps che 
            {...formik.getFieldProps('firstname')}
            
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstname}
          />
          {formik.errors.firstname && formik.touched.firstname ?
          <span>{formik.errors.firstname}</span>
          :null}
          <hr className="mb-4"/>
          <button className="btn btn-primary btn-lg btn-black" type="submit">
            Submit
          </button>
       </form>  
      </div>      
    </div>
  )
}

export default FormTwo;
