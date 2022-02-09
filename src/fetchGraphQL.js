async function fetchGraphQL(text, variables) {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYzMDE4MzI0NX0.JbzEogNWgGZEeAUqeBX-ASCcdElPFovKoXCcNqkZTa8",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
