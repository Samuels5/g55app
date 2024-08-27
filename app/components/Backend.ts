import axios from "axios";
const baseUrl = "https://a2sv-backend.onrender.com/api/blogs";
export async function getblogs(
) {
  try {
    const response = await axios.get(
      baseUrl ,
      {
        headers: {
        //   Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching random investment data:", error);
    throw error;
  }
}
