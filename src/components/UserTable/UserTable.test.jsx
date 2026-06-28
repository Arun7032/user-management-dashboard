import { render, screen } from "@testing-library/react";
import UserTable from "./UserTable";

describe("UserTable", () => {
  const users = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@test.com",
      department: "Engineering",
    },
  ];

  test("renders user", () => {
    render(
      <UserTable
        users={users}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Doe")).toBeInTheDocument();
  });
});