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
      className="w-[69px] h-[75px] rounded-[10px] text-center text-[35px] font-[500] leading-[119.5%] border-transparent focus:ring-0"
      placeholder="*"
      maxLength={1}
      onKeyUp={toggleNext}
    />
  );
};

export default PinInput;
