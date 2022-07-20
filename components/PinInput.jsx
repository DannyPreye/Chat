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
      className="w-[40px] h-[39px] placeholder:grid placeholder:place-item-center rounded-[10px] text-center text-[28px] font-[500] leading-[119.5%] border-transparent focus:ring-0"
      placeholder="*"
      maxLength={1}
      onKeyUp={toggleNext}
    />
  );
};

export default PinInput;
