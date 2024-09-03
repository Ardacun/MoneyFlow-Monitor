import React from 'react';
import { useForm } from 'react-hook-form';
import "./Login.css";

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div class="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Email</label>
            <input {...register('email', { 
            required: true,
            pattern: 
            {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
            }, 
            })} placeholder="Email" 
            />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        </div>
        <div>
            <label>Password</label>
            <input {...register('password', { required: true })} placeholder="Password" />
            {errors.password && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <button type="submit">Login</button>
        </form>
    </div>
  );
}
