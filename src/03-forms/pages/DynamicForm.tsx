import { Form, Formik } from "formik";
import formJson from "../data/custom-form.json";
import { MyTextInput } from "../components/MyTextInput";
import { MySelect } from "../components/MySelect";
import * as Yup from 'yup';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value
    if (!input.validations) continue;
    let schema = Yup.string()
    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido');
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, `Minimo de ${(rule as any).value || 2}`);
        }
        if (rule.type === 'email') {
            schema = schema.email('Debe de ser tipo email.');
        }
        //* Otras reglas
    }
    requiredFields[input.name] = schema;
}

const validationsSchema = Yup.object({ ...requiredFields });


export const DynamicForm = () => (
    <div>
        <h1>Dynamic Form</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationsSchema}
            onSubmit={(values) => console.log(values)}>
            {(formik) => (
                <Form noValidate>
                    {
                        formJson.map(({ type, name, placeholder, label, options }) => {
                            if (type === 'input' || type === 'password' || type === 'email') {
                                return <MyTextInput key={name} type={(type as any)} label={label} name={name} placeholder={placeholder} />
                            } else if (type === 'select') {
                                return <MySelect key={name} label={label} name={name}>
                                    <option value="">Select an options</option>
                                    {
                                        options?.map(option => (<option key={option.id} value={option.id}>{option.label}</option>))
                                    }
                                </MySelect>
                            }
                            throw new Error(`El type: ${type}, no es soportado.`);
                        })
                    }
                    <span>Hola Mundo</span>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
)
