const BASE_URL = "https://jsonplaceholder.typicode.com/users";

const departments = [
  "Engineering",
  "HR",
  "Finance",
  "Marketing",
  "Sales",
  "Operations",
  "Support",
  "IT",
];

export async function getUsers() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    return users.map((user) => {
  const nameParts = user.name.split(" ");

  return {
    id: user.id,
    firstName: nameParts[0],
    lastName: nameParts.slice(1).join(" "),
    email: user.email,
    department: departments[user.id % departments.length],
  };
});
  } catch (error) {
    throw error;
  }
}