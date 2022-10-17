export default function PlayButton({ playing, handleClick }) {
  return (
    <>
      <img
        className={playing ? "show" : "hide"}
        onClick={handleClick}
        src={require("./media/frame1.png")}
        alt="big red button"
      />

      <img
        className={playing ? "hide" : "show"}
        onClick={handleClick}
        src={require("./media/frame2.png")}
        alt="big red button"
      />
    </>
  )
}