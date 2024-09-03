import React from 'react';
import { useForm } from 'react-hook-form';
import "./Subscribe.css";

export function Subscribe() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    reset 
    } = useForm();

  // Watch password field for confirm password validation
  const password = watch("password");

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    alert(`Thank you for subscribing, ${data.firstName}, " ", ${data.lastName}!`);
    reset(); // Reset form after submission
  };

  return (
    <div class="container">
        <h2>Subscribe</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>First Name</label>
            <input {...register('firstName', { required: true })} placeholder="First Name" />
            {errors.firstName && <span style={{ color: "red" }}>This field is required</span>}
        </div>
        <div>
            <label>Last Name</label>
            <input {...register('lastName', { required: true })} placeholder="Last Name" />
            {errors.lastName && <span style={{ color: "red" }}>This field is required</span>}
        </div>
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
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            placeholder="Password"
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label>Confirm password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <span style={{ color: "red" }}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>

        <button type="submit">Subscribe</button>
        </form>
    </div>
  );
}