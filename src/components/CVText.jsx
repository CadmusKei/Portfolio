
export default function CVText({ children, className }) {
  return <p className={`text-white text-serif text-base md:text-2xl ${className}`}>{children}</p>;
}
