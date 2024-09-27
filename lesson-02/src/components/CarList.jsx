const cars = ["Audi", "BMW", "Mercedes", "Volkswagen", "Volvo"];

export default function CarList() {
  return (
    <ul>
      {cars.map((car) => {
        return <li>{car}</li>;
      })}
    </ul>
  );
}
