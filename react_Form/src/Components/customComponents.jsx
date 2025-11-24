import { useState } from "react";

export const CustomForm = ({ feilds, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState(() => {
    return feilds.reduce((accumalator, feild) => {
      accumalator[feild.name] = "";
      return accumalator;
    }, {});
  });
  console.log("Form Data: ", formData);
  console.log("Feilds: ", feilds);

  const handleChange = (e) => {
    console.log("E: ", e);
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      {feilds &&
        feilds.map((el, i) => (
          <div key={i}>
            <label htmlFor={el.name}>{el.label}</label>
            <br />
            <br />
            <input
              type={el.type}
              id={el.name}
              name={el.name}
              placeholder={el.placeholder}
              value={formData[el.name]}
              onChange={(e) => handleChange(e)}
              required={el.required}
            />
            <br />
            <br />
          </div>
        ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};
