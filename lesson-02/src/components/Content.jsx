export default function Content({ title, paragraph, image }) {
  // props.title;
  // props.paragraph;
  // props.image;

  // const { title, paragraph, image } = props;

  //   const title = props.title;
  //   const paragraph = props.paragraph;
  //   const image = props.image;

  //   const numbersArray = [1, 2, 3];
  //   const [first, second, third] = numbersArray;

  //   const first = numbersArray[0];
  //   const second = numbersArray[1];
  //   const third = numbersArray[2];

  return (
    <div>
      <h2>{title}</h2>
      <p>{paragraph}</p>
      <img src={image} alt="A random image" />
    </div>
  );
}

Content.defaultProps = {
  title: "Default title",
  paragraph: "Default paragraph",
  image: "https://picsum.photos/200",
};
