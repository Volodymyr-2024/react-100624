export default function ContentRest(props) {
  const { title, name, age, ...rest } = props;

  if (!rest.name) {
    console.error("NO TITLE!!!!!!");
  }

  console.log(rest);

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
