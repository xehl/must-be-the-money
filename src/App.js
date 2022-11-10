import "./App.css";
import { useState, useEffect } from "react";
import sound from "./media/mbtm.mp3";
import PlayButton from "./playbutton";
import AddNewButton from "./addnewbutton";
import WebFont from "webfontloader";

function App() {
  const defaultAudio = new Audio(sound);

  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(defaultAudio);

  useEffect(() => {
    console.log(audio);
  }, [audio]);

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
      <AddNewButton audio={audio} setAudio={setAudio} />
    </div>
  );
}

export default App;
