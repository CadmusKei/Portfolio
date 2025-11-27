function AnimatedCover({ src, width, height }) {
  return (
    <div className={`relative overflow-hidden ${width} ${height} image-rendering-[pixelated]`}>
      <img src={src} alt="" />
    </div>
  );
}
export default AnimatedCover;