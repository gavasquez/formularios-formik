import "../styles/styles.css";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {

    const { email, name, password1, password2, onChange, resetForm, onSubmit, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={onChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es necesario</span>}


                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es valido</span>}

                <input
                    type="password"
                    placeholder="Password1"
                    name="password1"
                    value={password1}
                    onChange={onChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que ser mayor de 6 caracteres</span>}

                <input
                    type="password"
                    placeholder="Password2"
                    name="password2"
                    value={password2}
                    onChange={onChange}
                />
                {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>La contraseñas deben ser iguales</span>}


                <button type="submit">Crear</button>
                <button onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}
