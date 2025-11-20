function Block({ width, height, children, className }) {
  return (
    <>
      <div
        className={`${width} ${height} bg-black rounded-4xl drop-shadow-lg text-white ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Block;
