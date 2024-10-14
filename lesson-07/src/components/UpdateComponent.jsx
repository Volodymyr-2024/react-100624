import { useState } from "react";

export default function UpdateComponent({ name }) {
  const [age, setAge] = useState(18);
  const cleanName = name.trim();
  return <div>{cleanName}</div>;
}
