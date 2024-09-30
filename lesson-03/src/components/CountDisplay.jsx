export default function CountDisplay({ count }) {
  if (count === 0) {
    return <p>Никто не нажал на кнопку</p>;
  } else if (count < 0) {
    return <p>Отрицательное число</p>;
  } else {
    return <p>Количество нажатий: {count}</p>;
  }
}
