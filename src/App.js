import "./App.css";
import { useState, useEffect } from "react";
import sound from "./media/mbtm.mp3";
import PlayButton from "./playbutton";
import WebFont from "webfontloader";

function App() {
  const audio = new Audio(sound);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Silkscreen"],
      },
    });
  }, []);

  function handleClick() {
    setPlaying(true);
    if (!playing) audio.play();
  }

  audio.onended = () => {
    console.log("finished playing");
    setPlaying(false);
  };

  return (
    <div className="App">
      <div className="instructions">PRESS THIS BUTTON</div>
      <PlayButton playing={playing} handleClick={handleClick} />
    </div>
  );
}

export default App;
