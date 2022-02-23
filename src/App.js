import React from 'react';
import FormikLogin from './Screens/FormikLogin/FormikLogin';
import Login from './Screens/Login/Login';

const App = () => {
  return (
    <div>
      <h1>Formik With Html</h1>
      <Login />
      <h1>Formik With Own Components</h1>
      <FormikLogin />
    </div>
  )
}

export default App;
