import { useState } from "react";

export default function DragAndDropExample() {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    alert(`Перетащено: ${draggedItem}`);
    setDraggedItem(null);
  };

  return (
    <div>
      <h2>Перетаскивание</h2>
      <div
        draggable={true}
        onDragStart={(e) => handleDragStart(e, "1 элемент")}
        style={{ border: "1px solid black", padding: "10px", width: "100px" }}
      >
        Перетащи меня 1
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "2 элемент")}
        style={{ border: "1px solid black", padding: "10px", width: "100px" }}
      >
        Перетащи меня 2
      </div>
      <div
        draggable
        onDragStart={(e) => handleDragStart(e, "3 элемент")}
        style={{ border: "1px solid black", padding: "10px", width: "100px" }}
      >
        Перетащи меня 3
      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{
          border: "1px solid black",
          padding: "10px",
          marginTop: "20px",
          height: "100px",
        }}
      >
        Сюда
      </div>
    </div>
  );
}
