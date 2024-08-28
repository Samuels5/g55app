import axios from "axios";
const baseUrl = "http://blogapp.tryasp.net";
export async function getblogs(
) {
  try {
    const response = await axios.get(baseUrl +"/api/blog", {
      headers: {
        Authorization: `Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3Nzc3NzIHNzc3NzcyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6InNzc3Nzc0BnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiIyNyIsImV4cCI6MTcyNTAyNTgwOH0.X7kKFzQcQ8q13T2dEsptqhMoX2FK_U2f1WlnmONSFAWunJMR3kFDRsGf7LW-AhP2TBWLB5lxo7wKhugGIkxaQQ`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random investment data:", error);
    throw error;
  }
}
