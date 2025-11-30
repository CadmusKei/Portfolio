function TextLink({ path, hoverColour }) {
  return <p className={`text-3xl text-pixel text-white ${hoverColour} hover:duration-200 transition duration-900` }>{path}</p>;
}

export default TextLink;
