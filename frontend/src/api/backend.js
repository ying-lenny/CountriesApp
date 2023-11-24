export async function getSearchResults(result) {
  try{
    const res = await fetch('http://localhost:7000/api/results', {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "name": `${result}`
      })
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}