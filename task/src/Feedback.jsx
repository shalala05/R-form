import React, { useState } from "react";
const Feedback = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    comment: ""
  });

  const [errors, setErrors] = useState({});
  const isFormValid =
    form.firstname &&
    form.lastname &&
    form.phone &&
    form.email &&
    form.comment &&
    !Object.values(errors).some((error) => error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    if (name === "phone" || name === "customerPhone") {
      if (value.length !== 10 || isNaN(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Nömrə 10 rəqəmdən ibarət olmalıdır.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    } else if (name === "email") {
      if (!value.endsWith(".com")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Yalnız .com domenlərinə icazə verilir.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Rəy və Müştəri Məlumatları:\n
Ad: ${form.firstname}\n
Soyad: ${form.lastname}\n
Telefon: ${form.phone}\n
E-mail: ${form.email}\n
Şərh: ${form.comment}`);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label>
          Ad:
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Soyad:
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Telefon:
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <span>{errors.phone}</span>}
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Şərh:
          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={!isFormValid}>
          Göndər
        </button>
      </form>
    </div>
  );
};

export default Feedback;
