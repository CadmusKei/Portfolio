function Block({ width, height, children, className }) {
  return (
    <>
      <div
        className={`${width} ${height} overflow-hidden bg-[#111111] rounded-4xl drop-shadow-lg text-white ${className}`}
      >
        {children}
      </div>
    </>
  );
}

export default Block;
