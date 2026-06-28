export function validateUser(user) {
  const errors = {};

  if (!user.firstName.trim()) {
    errors.firstName = "First Name is required";
  }

  if (!user.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }

  if (!user.email.trim()) {
    errors.email = "Email is required";
  } else {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(user.email)) {
      errors.email = "Invalid Email";
    }
  }

  if (!user.department.trim()) {
    errors.department = "Department is required";
  }

  return errors;
}