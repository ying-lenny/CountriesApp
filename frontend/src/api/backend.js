export async function getSearchResults(result) {
  try{
    const res = await fetch('https://countriesapp-ggwg.onrender.com/api/results', {
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