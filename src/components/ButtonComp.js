const ButtonComp = ({ type, handleClick, innerText }) => {
  const myClass = `button-${type}`;
  return (
    <button className={myClass} onClick={handleClick}>
      {innerText}
    </button>
  );
};
export default ButtonComp;
