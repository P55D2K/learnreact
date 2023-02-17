const Button = () => {
  function clickHandler() {
    alert("hi");
  }
  return (
    <button className="btn" onClick={clickHandler}>
      click me!
    </button>
  );
};

export default Button;
