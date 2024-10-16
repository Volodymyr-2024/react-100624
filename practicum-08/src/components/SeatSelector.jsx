import classes from "./SeatSelector.module.css";

export default function SeatSelector({ seats, setSeatStatus }) {
  // Отрисовывает меню для выбора мест.
  // Список мест берем из пропа, функцию для обновления тоже

  function getSeatClass(seat) {
    if (seat.status === "free") {
      return classes.free;
    }
    if (seat.status === "selected") {
      return classes.selected;
    }
    return "";
  }

  return (
    <div>
      <div className={classes.selector}>
        {seats.map((seat) => (
          <button
            key={seat.id}
            className={getSeatClass(seat)}
            onClick={() => {
              setSeatStatus(
                seat.id,
                seat.status === "free" ? "selected" : "free"
              );
            }}
          >
            {seat.id}
          </button>
        ))}
      </div>

      <p>
        Selected seats:{" "}
        {seats
          .filter((s) => s.status === "selected")
          .map((s) => s.id)
          .join(", ")}
      </p>
    </div>
  );
}
