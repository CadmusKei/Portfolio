function AnimatedCover({ src, width, height }) {
  return (
    <div className={` overflow-hidden  image-rendering-[pixelated]`}>
      <img src={src} alt="" className={` ${width} ${height} image-pixel`} />
    </div>
  );
}
export default AnimatedCover;