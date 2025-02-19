"use client";

import { FormEvent, useRef, useState } from "react";
import Button from "./Button";

type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value_name = name.current!.value;
    const value_email = email.current!.value;
    const value_password = password.current!.value;

    setSubmittedData({
      name: value_name,
      email: value_email,
      password: value_password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" ref={name} />
        <input type="text" placeholder="Enter your email" ref={email} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={password}
        />
        <button type="submit">submit</button>
      </form>

      <section>
        <div>{submittedData.name}</div>
        <div>{submittedData.email}</div>
        <div>{submittedData.password}</div>
      </section>

    </div>
  );
};

export default Form;
