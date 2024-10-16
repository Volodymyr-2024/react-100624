import { useState, useEffect } from "react";

export default function CompWithFetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <p>Component with fetch</p>
      <p>Data: {data ? data.title : "Loading..."}</p>
    </div>
  );
}
