import { CustomForm } from "./customComponents";

export const Form = () => {
  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: "Enter Your Username",
      label: "Username",
      required: "true",
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter Your Email",
      label: "Email",
      required: "true",
    },
    {
      name: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      label: "Password",
      required: "true",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Enter Your Confirm Password",
      label: "confirmPassword",
      required: "true",
    },
    {
      name: "phone",
      type: "tel",
      placeholder: "Enter Your Number",
      label: "Phone",
      required: "true",
    },
  ];

  const handleSubmit = (data) => {
    console.log("Form Submited: ", data);
  };

  return (
    <>
      <div>
        <h1>React Form With Props Validation</h1>
        <CustomForm
          feilds={fields}
          onSubmit={handleSubmit}
          buttonText="Register"
        />
      </div>
    </>
  );
};
