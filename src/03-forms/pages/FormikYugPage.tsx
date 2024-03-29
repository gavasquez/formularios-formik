import { useFormik } from "formik";
import '../styles/styles.css'
import * as Yup from 'yup';

export const FormikYugPage = () => {

  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {
      console.log('values', values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Debe de tener 15 carcteres o menos').required('Requerido'),
      lastName: Yup.string().max(15, 'Debe de tener 15 carcteres o menos').required('Requerido'),
      email: Yup.string().email('Correo no tiene un formato valido').required('Requerido')

    })
  });

  return (
    <div>
      <h1>Formik Yug Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...getFieldProps('firstName')}
        />
        {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />

        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}



        <label htmlFor="email">Email Addres</label>
        <input
          type="email"
          {...getFieldProps('email')}
        />

        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
