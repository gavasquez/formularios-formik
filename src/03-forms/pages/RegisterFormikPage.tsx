import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { MyTextInput } from "../components/MyTextInput";

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik initialValues={{
                name: '',
                email: '',
                password1: '',
                password2: ''
            }}
                onSubmit={(values) => console.log(values)}
                validationSchema={
                    Yup.object({
                        name: Yup.string().min(2, 'El nombre de ser 3 caracteres o mas').max(15, 'El nombre no debe ser menor de 15 caracteres').required('Requerido!'),
                        email: Yup.string().email('Revise el formato del correo').required('Requerido!'),
                        password1: Yup.string().required('Requerido!').min(6, 'Mínimo de 6 caracteres.'),
                        password2: Yup.string().oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales').required('Requerido!')
                    })
                }
            >
                {
                    ({ handleReset }) =>
                    (
                        <Form>
                            <MyTextInput label="Nombre" name="name" placeholder="Andres" />
                            <MyTextInput label="Email" name="email" type="email" placeholder="gustavo@google.com" />
                            <MyTextInput label="Password" name="password1" type="password" placeholder="****************" />
                            <MyTextInput label="Confirmar Password" name="password2" type="password" placeholder="****************" />
                            <button type="submit">Crear</button>
                            <button type="submit" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}
