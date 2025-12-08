function Card({link, width, height, children, className }) {
  return (
    <>
      <div
        onClick={() => window.open(link)}
        className={`${width} ${height} overflow-hidden cursor-pointer bg-[#111111] rounded-4xl drop-shadow-lg text-white ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Card;
