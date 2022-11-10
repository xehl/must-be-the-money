import "./App.css";

export default function AddNewButton({audio, setAudio}) {

  function handleFiles(e) {
    var audiofile = e.target.files[0];
    const userfile = new Audio(URL.createObjectURL(audiofile))
    setAudio(userfile)
  }

  function handleButton() {
    console.log("clicked")
  }
  
  return (
    <>
      <label onClick={handleButton} type="file" id="upload" className="add-new">
        <input className="audioinput" type="file" accept=".mp3, .wav" id="upload" onChange={handleFiles} /> UPLOAD SOUND EFFECT
      </label>
    </>
  )
}