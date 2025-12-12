function Title({ name, className }) {
  return <h1 className={` text-3xl md:text-5xl text-pixel ${className}`}>{name}</h1>;
}

export default Title;
