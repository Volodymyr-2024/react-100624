import { useState, useEffect } from "react";

export default function CompWithFetchUser({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div>
      <p>Component with fetch</p>
      <p>Data: {data ? data.name : "Loading..."}</p>
    </div>
  );
}
