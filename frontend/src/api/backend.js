export async function getAllUsers() {
  try{
    const res = await fetch('http://localhost:7000/api/users', {
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

export async function getIreland() {
  try{
    const res = await fetch('http://localhost:7000/ireland', {
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