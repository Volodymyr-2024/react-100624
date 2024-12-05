import { useState } from "react";
import WeatherTracker from "./components/ComplexUseEffect.jsx";

function App() {
  const [showInterval, setShowInterval] = useState(false);
  const [city, setCity] = useState("Москва");
  const [interval, setInterval] = useState(5000);

  return (
    <div>
      Hello
      <div>
        <input
          type="number"
          step={1000}
          min={1000}
          max={60000}
          value={interval}
          onChange={(e) => {
            setInterval(e.target.value);
          }}
        />
        <select onChange={(e) => setCity(e.target.value)}>
          <option>Москва</option>
          <option>Санкт-Петербург</option>
          <option>Новосибирск</option>
        </select>
        <WeatherTracker city={city} updateInterval={interval} />
      </div>
      {/*<SimpleComponent/>*/}
      {/*<ColorChangeComponent/>*/}
      {/*<button*/}
      {/*    onClick={() => {*/}
      {/*        setShowInterval(!showInterval);*/}
      {/*    }}*/}
      {/*>*/}
      {/*    Toggle Interval*/}
      {/*</button>*/}
      {/*{showInterval && <Interval/>}*/}
      {/*<DataFetcher/>*/}
    </div>
  );
}

export default App;
