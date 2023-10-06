import { ChangeEvent, FormEvent, useState } from "react";


export const useForm = <T>(initState: T) => {

    const [formData, setFormData] = useState(initState);

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    }

    const resetForm = () => {
        setFormData({ ...initState });
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log({ registerDate: formData });
    }
    return {
        ...formData,
        formData,
        //* Metodos
        resetForm,
        onChange,
        onSubmit,
        isValidEmail
    }

}
