export async function reviewCode(code) {

  const response = await fetch("http://localhost:8000/review", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ code })
  });

  return await response.json();
}