import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import KErrorMessage from './components/KErrorMessage';

const validationSchema = Yup.object({
  // name field ne Yup check karse k string required che k nai jo feild ma data add na kare to error avse
  // custom error message
  name: Yup
    .string()
    .required("Name is Required!"),
  phone: Yup
    .number()
    .min(1000000000, "Not Valid a Phone Number!").max(9999999999, "Not Valid a Phone Number!")
    .required("Phone is Required!"),
  // regex method matches use karine expresson add karya che 
  password: Yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Minimum 8 characters,one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is Required!"),
  email: Yup
    .string()
    .matches(
      // /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/     
    )
    .required('Email is required!'),
  gender: Yup.string().required("Age is Required"),
  date: Yup.date().required("Date of Birth is Required"),
  income: Yup.string().required("Income is Required"),
  about: Yup
    .string()
    .min(5, "too small!@")
    .max(500, "Too Long String")
    .required("About is required"),
  social: Yup
    .array()
    .of(
      Yup
        .string("String is Required!")
        .min(4, "Too Short")
        .max(20, "Too Long")
        .required("Required")
    )
    .min(1, "Atleast One Social Media is Required!")
    .required("Required"),
  hobbies: Yup
    .array()
    .of(
      Yup
        .string("String is Required!")
        .min(4, "Too Short")
        .max(20, "Too Long")
        .required("Required")
    )
    .min(1, "Atleast One Hobbies is Required!")
    .required("Required"),
})

const FormOne = () => {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          phone: "",
          password: "",
          email: "",
          gender: "",
          date: "",
          income: "",
          about: "",
          hobbies: [],
          social: [],
          // array ma pn facebook nd twitter ne store kari sakay
          // nested field object create karyo che social ni inside two object che 
          //  or
          // social: {
          //   facebook: "",
          //   twitter: "",
          // }
        }}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {/* event method  */}
        {({ values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (

          <Form className="container">
            <h2>Personal Information</h2>
            <hr />
            <label>Name:</label>
            <Field
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ?
              <span>{errors.name}</span>
              : null}
            {/* or  */}
            {/* <KErrorMessage name="name" /> */}
            <br /> <br />
            <label>Phone:</label>
            <Field name="phone" type="number" />
            <KErrorMessage name="phone" />
            <br />
            <label>Password:</label>
            <Field name="password" type="text" />
            <KErrorMessage name="password" />
            <br />
            <label>Email:</label>
            <Field name="email" type="text" placeholder="you@gmail.com" />
            <KErrorMessage name="email" />
            <br />
            <label>Gender: &nbsp;</label>
            <label>Male:</label>
            <Field name="gender" value="male" type="radio" />
            <label>Female:</label>
            <Field name="gender" value="female" type="radio" />
            <KErrorMessage name="gender" />
            <br />
            <label>Date:</label>
            <Field name="date" type="date" />
            <KErrorMessage name="date" />
            <br />
            <label>Income:</label>
            <Field name="income" as="select">
              <option value="0">Rs 0</option>
              <option value="1000">Rs 1000</option>
              <option value="5000">Rs 5000</option>
              <option value="10000">Rs 10000</option>
            </Field>
            <KErrorMessage name="income" />
            <br />
            <label>About:</label>
            <Field name="about" as="textarea" />
            <KErrorMessage name="about" />
            <br />
            <label>Social:</label>
            <KErrorMessage name="social" />
            <br />
            <label>Facebook:</label>
            {/* <Field name="social.facebook" type="text" /> */}
            {/* array ma store index apine */}
            <Field name="social[0]" type="text" />
            <KErrorMessage name="social.0" />
            <br />
            <label>Twitter:</label>
            {/* <Field name="social.twitter" type="text" /> */}
            {/* array ma store index apine */}
            <Field name="social[1]" type="text" />
            <KErrorMessage name="social.1" />
            <br />
            <FieldArray
              name="hobbies"
              render={arrayHelpers => (
                <div>
                  {values.hobbies && values.hobbies.length > 0 ? (
                    values.hobbies.map((hobbies, index) => (
                      <div key={index}>
                        <Field name={`hobbies.${index}`} />
                        <KErrorMessage name={`hobbies.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all friends from the list */}
                      Add a Hobbies
                    </button>
                  )}
                </div>
              )}
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormOne;

