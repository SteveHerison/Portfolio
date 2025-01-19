export const fetchHygrapQuery = async (query: string, revalidate?: number) => {
  try {
    const response = await fetch(process.env.HYGRAPH_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate,
      },
    });

    const result = await response.json();
    console.log("Fetch response:", result);

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
    }

    return result.data; // Check if `data` is correctly returned
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
