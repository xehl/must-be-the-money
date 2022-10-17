export default function PlayButton({ playing, handleClick }) {
  return (
    <div>
      <img
        className={playing ? "play-button" : "hide"}
        onClick={handleClick}
        src={require("./media/frame1.png")}
        alt="big red button"
      />

      <img
        className={playing ? "hide" : "play-button"}
        onClick={handleClick}
        src={require("./media/frame2.png")}
        alt="big red button"
      />
    </div>
  )
}