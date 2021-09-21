import React, { useState } from 'react';

interface IForm {
    email: string,
    password: string,
}

export default function MyForm() {
    // const [input, setInput] = useState({ email: "", password: "" });
    const [input, setInput] = useState<IForm>({ email: "", password: "" });

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({
            ...input,
            [name]: value
        });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInput({
            email: "",
            password: ""
        });
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={input.email} name="email" onChange={onChange} />
            <input type="password" value={input.password} name="password" onChange={onChange} />
            <button type="submit">submit</button>
        </form>
    )
}
