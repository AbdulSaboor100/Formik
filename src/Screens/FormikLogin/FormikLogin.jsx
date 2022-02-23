import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikLogin = () => {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          console.log('submitting', values);
          setTimeout(() => {
            console.log(JSON.stringify(values), null, 2);
            setSubmitting(false);
          }, 1000);
        }}
    //   validate={values => {
    //     let error = {};
    //     if (!values.name) {
    //       error.name = 'Name is required'
    //       error.email = "Email is required"
    //     }
    //     return error;
    //   }}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        values,
        touched,
        errors,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Field type='text' name='name' />
          <button type='submit'>Submit</button>
          <ErrorMessage name='name' />
        </Form>
      )}
    </Formik>
  );
};

export default FormikLogin;
