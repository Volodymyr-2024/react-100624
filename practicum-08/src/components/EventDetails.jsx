import classes from "./EventDetails.module.css";

export default function EventDetails({
  concertName,
  concertDate,
  concertVenue,
  bandName,
}) {
  // Показывает делати концерта. Получет их через пропы
  return (
    <div className={classes.details}>
      <h1>{concertName}</h1>
      <p>Date: {concertDate}</p>
      <p>Venue: {concertVenue}</p>
      {bandName && <p>Band: {bandName}</p>}
    </div>
  );
}
