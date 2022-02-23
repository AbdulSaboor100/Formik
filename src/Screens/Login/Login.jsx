import React from 'react';
import { Formik } from 'formik';

const Login = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={(values , {setSubmitting}) => {
          setTimeout(()=>{
              console.log(JSON.stringify(values), null, 2)
              setSubmitting(false)
          },1000)
        console.log(`Submitting`, values);
      }}
      validate={values => {
        let error = {};
        if (!values.name) {
          error.name = 'Name Is Required';
          error.email = 'Email Is Required';
        }
        return error;
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
        handleBlur,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            type='text'
            value={values.name}
            name='name'
            onChange={handleChange}
          ></input>
          {errors.name && touched.name && (
            <div>{`errorVal is ${errors.name}`}</div>
          )}
          <br />
          <input
            onBlur={handleBlur}
            type='text'
            value={values.email}
            name='email'
            onChange={handleChange}
          ></input>
          {errors.email && touched.email && (
            <div>{`errorVal is ${errors.email}`}</div>
          )}
          <br />
          <button disabled={isSubmitting}>Submit</button>
          <br />
        </form>
      )}
    </Formik>
  );
};

export default Login;
