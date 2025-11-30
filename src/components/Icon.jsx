function Icon({ link, path, scalar, hoverColour }) {
  return (

      <a href="#">
        <div className={
          `flex w-14 h-14 rounded-lg shadow-neutral-950 shadow-md border-3 border-neutral-800  items-center justify-center 
          transition ${hoverColour} hover:duration-400  duration-900`
          }>
          <img src={path} alt="" className={`${scalar} `}  />
        </div>
      </a>

  );
}

export default Icon;

