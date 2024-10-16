import { useState } from "react";

import EventDetails from "./EventDetails";
import SeatSelector from "./SeatSelector";

import classes from "./EventBooking.module.css";

const initialSeats = [
  {
    id: "1A",
    status: "free",
  },
  {
    id: "1B",
    status: "free",
  },
  {
    id: "1C",
    status: "free",
  },
  {
    id: "1D",
    status: "free",
  },
  {
    id: "1E",
    status: "free",
  },
  {
    id: "1F",
    status: "free",
  },
  {
    id: "2A",
    status: "free",
  },
  {
    id: "2B",
    status: "free",
  },
  {
    id: "2C",
    status: "free",
  },
  {
    id: "2D",
    status: "free",
  },
  {
    id: "2E",
    status: "free",
  },
  {
    id: "2F",
    status: "free",
  },
];

export function EventBooking() {
  // Главный компонент. Должен содержать состояние для выбранных мест
  const [seats, setSeats] = useState(initialSeats);

  function setSeatStatus(seatId, status) {
    setSeats((prevSeats) =>
      prevSeats.map((seat) =>
        // Если id места совпадает с переданным id, на которое кликнули
        // то меняем статус
        seat.id === seatId ? { ...seat, status: status } : seat
      )
    );
  }

  return (
    <div className={classes.booking}>
      <EventDetails
        concertName="Concert of the Year"
        concertDate="31-12-2024"
        concertVenue="City Arena"
      />
      <SeatSelector seats={seats} setSeatStatus={setSeatStatus} />
    </div>
  );
}
