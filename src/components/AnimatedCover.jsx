function AnimatedCover({ src, width, height }) {
  return (
    <div className={` overflow-hidden ${width} ${height} image-rendering-[pixelated]`}>
      <img src={src} alt="" className="image-pixel" />
    </div>
  );
}
export default AnimatedCover;