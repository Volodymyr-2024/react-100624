import ShowCalc from "./components/ShowCalc";
import CarList from "./components/CarList";
import Content from "./components/Content";
import ContentRest from "./components/ContentRest";
import Box from "./components/Box";
import MusicAlbum from "./components/MusicAlbum";

function App() {
  return (
    <div>
      <h1>Lesson 2</h1>
      {/* <ShowCalc />
      <CarList />
      <ContentRest
        title="Title rest"
        paragraph="Some paragraph rest"
        image="https://picsum.photos/200"
      />
      <Content paragraph="Some paragraph 1" image="https://picsum.photos/200" />
      <Content title="Title 2" image="https://picsum.photos/200" />
      <Content
        title="Title 3"
        paragraph="Some paragraph 3"
        image="https://picsum.photos/200/300"
      />
      <Content key="1" children="Child" ref="ref" /> */}
      {/* <Box>
        <h2>Heading 2</h2>
        <p>Some text</p>
      </Box>
      <Box>Text</Box>
      <Box children="Text" />
      <Box
        children={
          <>
            <h2>Heading 2</h2>
            <p>Some text</p>
          </>
        }
      /> */}
      <MusicAlbum
        artist="The Beatles"
        title="The White Album"
        tracks={[
          { order: 1, title: "Back in the U.S.S.R." },
          { order: 2, title: "Dear Prudence" },
          { order: 3, title: "Glass Onion" },
          { order: 4, title: "Ob-La-Di, Ob-La-Da" },
          { order: 5, title: "Wild Honey Pie" },
          { order: 6, title: "The Continuing Story of Bungalow Bill" },
          { order: 7, title: "While My Guitar Gently Weeps" },
          { order: 8, title: "Happiness Is a Warm Gun" },
          { order: 9, title: "Martha My Dear" },
          { order: 10, title: "I'm So Tired" },
          { order: 11, title: "Blackbird" },
          { order: 12, title: "Piggies" },
          { order: 13, title: "Rocky Raccoon" },
          { order: 14, title: "Don't Pass Me By" },
          { order: 15, title: "Why Don't We Do It in the Road?" },
          { order: 16, title: "I Will" },
          { order: 17, title: "Julia" },
          { order: 18, title: "Birthday" },
          { order: 19, title: "Yer Blues" },
          { order: 20, title: "Mother Nature's Son" },
          {
            order: 21,
            title: "Everybody's Got Something to Hide Except Me and My Monkey",
          },
          { order: 22, title: "Sexy Sadie" },
          { order: 23, title: "Helter Skelter" },
          { order: 24, title: "Long, Long, Long" },
          { order: 25, title: "Revolution 1" },
          { order: 26, title: "Honey Pie" },
          { order: 27, title: "Savoy Truffle" },
          { order: 28, title: "Cry Baby Cry" },
          { order: 29, title: "Revolution 9" },
          { order: 30, title: "Good Night" },
        ]}
      />
    </div>
  );
}

export default App;
