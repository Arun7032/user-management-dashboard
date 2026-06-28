export function sortUsers(users, sortOption) {
  const sortedUsers = [...users];

  switch (sortOption) {
    case "firstNameAsc":
      return sortedUsers.sort((a, b) =>
        a.firstName.localeCompare(b.firstName)
      );

    case "firstNameDesc":
      return sortedUsers.sort((a, b) =>
        b.firstName.localeCompare(a.firstName)
      );

    case "lastNameAsc":
      return sortedUsers.sort((a, b) =>
        a.lastName.localeCompare(b.lastName)
      );

    case "lastNameDesc":
      return sortedUsers.sort((a, b) =>
        b.lastName.localeCompare(a.lastName)
      );

    case "departmentAsc":
      return sortedUsers.sort((a, b) =>
        a.department.localeCompare(b.department)
      );

    case "departmentDesc":
      return sortedUsers.sort((a, b) =>
        b.department.localeCompare(a.department)
      );

    default:
      return sortedUsers;
  }
}