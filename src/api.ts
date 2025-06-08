export const fetchUsers = async () => {
  const response = await fetch('http://localhost:5000/api/users');
  if (!response.ok) throw new Error('Network error');
  return await response.json();
};