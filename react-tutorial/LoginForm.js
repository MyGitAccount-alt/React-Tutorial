import { React } from 'react';
import { Formik } from 'formik';

export default function FormikForm() {
  return (
    <Formik initialValues={{ name: " " ,emailid: ""}}>
      {({ values,errors,touched,handleChange,handleBlur}) => (
    <form>
      {JSON,stringify(values)}
      <div className="input-row">
        <label htmlFor="name">Name  </label>
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Enter your name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        />
      </div>
    </form>
    )}
    </Formik>
  );
      }
      <div className="input-row">
      <label htmlFor="email">Email</label>
      <input
      type="email"
      name="email"
      id="email"
      placeholder="Enter your email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      />
    </div>
     