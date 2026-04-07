function Text({ children, className }) {
  return <p className={`text-white text-pixel text-base md:text-2xl ${className}`}>{children}</p>;
}

export default Text;
