import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchData = async () => {      
      try {
        // Normally here we'd send a request to a protected route of the backend API of the app.
        // whether or not the user is authenticated depends on the result of the request
        // await axios.get("/api/arbitrary");

        // For our purposes, we'll simulate a 250ms delay in place of the API call
        await new Promise(resolve => setTimeout(resolve, 250));

        // Set this to true for testing
        const simulateFailure = false;
        if (simulateFailure) throw new Error("Failed to authenticate");

        setIsAuthenticated(true)
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsAuthenticated(false);
      }
    };

    fetchData();
  }, []);

  return isAuthenticated;
};