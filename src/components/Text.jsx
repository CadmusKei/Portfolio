function Text({ children, className }) {
  return <p className={` text-white text-pixel text-2xl ${className}`}>{children}</p>;
}

export default Text;
