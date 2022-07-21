const PinInput = () => {
  const toggleNext = (e) => {
    const previousSibling = e.target.previousSibling;
    const nextSibling = e.target.nextSibling;

    nextSibling && e.key != "Backspace" && nextSibling.focus();
    e.key === "Backspace" && previousSibling && previousSibling.focus();
  };
  return (
    <input
      type="password"
      className="w-[50px] h-[39px] placeholder:grid placeholder:place-item-center bg-transparent border-b-2 border-coolBlue  text-center text-[28px] font-[500] leading-[119.5%] border-t-transparent border-x-transparent focus:border-x-transparent focus:border-t-transparent focus:ring-0"
      placeholder="*"
      maxLength={1}
      onKeyUp={toggleNext}
    />
  );
};

export default PinInput;
