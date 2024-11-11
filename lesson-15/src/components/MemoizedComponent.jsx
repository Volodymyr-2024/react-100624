import { useMemo } from "react";

export default function MemoizedComponent({ name }) {
  function transformName(name) {
    console.log("transformName called");
    return name.toUpperCase().replace(" ", "_");
  }

  const nameMemoized = useMemo(() => {
    return transformName(name);
  }, [name]);

  return (
    <div>
      <h1>MemoizedComponent {nameMemoized}</h1>

      <hr />
    </div>
  );
}
