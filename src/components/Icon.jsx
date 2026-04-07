function Icon({ link, path, scalar, hoverColour, angle, buttonSize, target }) {
  return (
    <a href={link} target={target}>
      <div className={`flex w-9 h-8 md:w-14 md:h-14 rounded-lg shadow-neutral-950 shadow-md border-3 border-neutral-800 items-center justify-center 
        transition bg-linear-to-br ${hoverColour} ${buttonSize} hover:duration-400 duration-900 hover:${angle}`}>
        <img src={path} alt="" className={`${scalar} md:scale-100 scale-50 image-pixel`} />
      </div>
    </a>
  );
}

export default Icon;

