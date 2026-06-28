
const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const departments = [
  "Engineering",
  "HR",
  "Finance",
  "Marketing",
  "Sales",
  "Operations",
  "Support",
  "IT",
];

function transformUser(user) {
  const nameParts = user.name.split(" ");

  return {
    id: user.id,
    firstName: nameParts[0],
    lastName: nameParts.slice(1).join(" "),
    email: user.email,
    department: departments[user.id % departments.length],
  };
}

// GET USERS
export async function getUsers() {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  return users.map(transformUser);
}

// CREATE USER
export async function createUser(user) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      department: user.department,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to create user");
  }

  return await response.json();
}

// UPDATE USER
export async function updateUser(user) {
  const response = await fetch(`${BASE_URL}/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      department: user.department,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to update user");
  }

  return await response.json();
}

// DELETE USER
export async function deleteUser(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Unable to delete user");
  }

  return true;
}