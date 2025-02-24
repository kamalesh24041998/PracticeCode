import React from "react";
import { useForm } from "react-hook-form";

 function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const report = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(report)}>
      <div>
        <label>Name:</label>
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: "Invalid email" },
          })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
