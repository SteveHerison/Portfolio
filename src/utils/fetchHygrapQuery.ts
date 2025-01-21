// src/utils/fetchHygrapQuery.ts

export const fetchHygrapQuery = async <T>(
  query: string,
  revalidate?: number
): Promise<T> => {
  try {
    const response = await fetch(process.env.HYGRAPH_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
      },
      next: {
        revalidate,
      },
      body: JSON.stringify({ query }),
    });

    const result = await response.json();
    console.log("GraphQL Result:", result);

    if (result.errors) {
      console.error("GraphQL Errors:", result.errors);
      throw new Error("GraphQL Errors occurred");
    }

    return result.data;
  } catch (error) {
    console.error("Erro ao fazer a consulta GraphQL:", error);
    throw error;
  }
};
