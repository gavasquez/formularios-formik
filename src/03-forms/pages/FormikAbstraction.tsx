import { Formik, Form } from "formik";
import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import { MyCheckbox } from "../components/MyChechbox";

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => { console.log(values) }}
        validationSchema={Yup.object({
          firstName: Yup.string().max(15, 'Debe de tener 15 carcteres o menos').required('Requerido'),
          lastName: Yup.string().max(15, 'Debe de tener 15 carcteres o menos').required('Requerido'),
          email: Yup.string().email('Correo no tiene un formato valido').required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required('Requerido')
        })}
      >
        {
          (formik) =>
          (
            <Form>

              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="Andres"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Vasquez"
              />

              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Vasquez@gmail.com"
              />

              <MySelect label="Job Type" name="jobType">
                <option value="">Pick something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Junior</option>
              </MySelect>

              <MyCheckbox label="Termns & conditions" name="terms" />

              <button type='submit'>Submit</button>
            </Form>
          )
        }

      </Formik>


    </div>
  )
}
