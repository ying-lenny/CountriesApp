export async function getAllUsers() {
  try{
    const res = await fetch('http://localhost:7000/users', {
    method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}