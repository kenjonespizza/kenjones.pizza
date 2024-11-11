const apiUrl: string = "https://api.hashnode.com/"

export const gql = async (query: string) => {
  const request = fetch(apiUrl, {
    method: "POST", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify(query)
  })

  const response = await request;
  const data = await response.json();
  console.log('data:', data)
  
  // return data ? data : "{NO Data}";
}