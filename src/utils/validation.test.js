import { describe, expect, test } from "vitest";
import { validateUser } from "./validation";

describe("Validation", () => {
  test("returns errors", () => {
    const errors = validateUser({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });

    expect(errors.firstName).toBeDefined();
    expect(errors.lastName).toBeDefined();
    expect(errors.email).toBeDefined();
    expect(errors.department).toBeDefined();
  });

  test("valid user", () => {
    const errors = validateUser({
      firstName: "John",
      lastName: "Doe",
      email: "john@test.com",
      department: "Engineering",
    });

    expect(Object.keys(errors).length).toBe(0);
  });
});