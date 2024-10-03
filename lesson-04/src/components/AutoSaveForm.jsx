import { useState, useEffect } from "react";

function AutoSaveLocalStorageExample() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const savedValue = localStorage.getItem("autoSaveInput");
    if (savedValue) {
      setValue(savedValue);
    }
  }, []);

  const handleBlur = () => {
    localStorage.setItem("autoSaveInput", value);
    setStatus("Saved");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setStatus("Сохраняем...");
  };

  return (
    <div>
      <h2>Форма с авто-сохранением в Local Storage</h2>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Печатай..."
      />
      <p>{status}</p>
    </div>
  );
}

export default AutoSaveLocalStorageExample;
