import { useState } from "react";
import { departments } from "../../services/api";
import { validateUser } from "../../utils/validation";

import "./UserForm.css";

function UserForm({
  initialData,
  onSubmit,
  submitText,
}) {
  const [formData, setFormData] = useState(
    initialData
  );

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors =
      validateUser(formData);

    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    onSubmit(formData);
  }

  return (
    <form
      className="user-form"
      onSubmit={handleSubmit}
    >
      <input
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />

      <small>{errors.firstName}</small>

      <input
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />

      <small>{errors.lastName}</small>

      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <small>{errors.email}</small>

      <select
        name="department"
        value={formData.department}
        onChange={handleChange}
      >
        <option value="">
          Select Department
        </option>

        {departments.map((dept) => (
          <option
            key={dept}
            value={dept}
          >
            {dept}
          </option>
        ))}
      </select>

      <small>{errors.department}</small>

      <button type="submit">
        {submitText}
      </button>
    </form>
  );
}

export default UserForm;