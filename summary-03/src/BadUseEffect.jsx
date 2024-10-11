import { useEffect, useState, useCallback } from "react";

export default function BadUseEffect() {
  const [data, setData] = useState(null);

  // A function defined inside the component
  const fetchData = useCallback(() => {
    // Simulate fetching dat
    setTimeout(() => {
      console.log("Fetched data");
      setData("Some fetched data");
    }, 1000);
  }, []);

  // Bad use of useEffect with a function in the dependency array
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <div>Data: {data}</div>;
}
