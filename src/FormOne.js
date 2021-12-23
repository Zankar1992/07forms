import React from 'react'
import { Formik, Form, Field, FieldArray } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup.string().required(),
})

const FormOne = () => {
  return (
    <div>
      <Formik initialValues={{
        name: "",
        phone: "",
        password: "",
        gender: "",
        date: "",
        income: "",
        about: "",
        hobbies:[], 
        // array ma pn facebook nd twitter ne store kari sakay
        // social:[] 
        // nested field object create karyo che social ni inside two object che 
        social: {
          facebook: "",
          twitter: "",
        }
      }}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({ values }) => (
          <Form>
            <label>Name:</label>
            <Field name="name" type="text" />
            <br /> <br />
            <label>Phone:</label>
            <Field name="phone" type="number" />
            <br /> <br />
            <label>Password:</label>
            <Field name="password" type="text" />
            <br /> <br />
            <label>Gender: &nbsp;</label>
            <label>Male:</label>
            <Field name="gender" value="male" type="radio" />
            <label>Female:</label>
            <Field name="gender" value="female" type="radio" />
            <br /> <br />
            <label>Date:</label>
            <Field name="date" type="date" />
            <br /> <br />
            <label>Income:</label>
            <Field name="income" as="select">
              <option value="0">Rs 0</option>
              <option value="1000">Rs 1000</option>
              <option value="5000">Rs 5000</option>
              <option value="10000">Rs 10000</option>
            </Field>
            <br /> <br />
            <label>About:</label>
            <Field name="about" as="textarea" />
            <br /> <br />
            <label>Social:</label>
            <br /> <br />
            <label>Facebook:</label>
            {/* <Field name="social.facebook" type="text" /> */}
            {/* array ma store index apine */}
            <Field name="social[0]" type="text"/>
            <br /> <br />
            <label>Twitter:</label>
            {/* <Field name="social.twitter" type="text" /> */}
            {/* array ma store index apine */}
            <Field name="social[1]" type="text"/>
            <br /> <br />
            <FieldArray
              name="hobbies"
              render={arrayHelpers => (
                <div>
                  {values.hobbies && values.hobbies.length > 0 ? (
                    values.hobbies.map((hobbies, index) => (
                      <div key={index}>
                        <Field name={`hobbies.${index}`} />
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
