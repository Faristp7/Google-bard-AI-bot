import { useEffect, useRef, useState } from "react";
import { lineSpinner } from 'ldrs'

lineSpinner.register()

export default function SearchInputBox(prop) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null)

  const sendMessage = (e) => {
    e.preventDefault();
    prop.handleTextChange(inputValue);
    setInputValue("");
  };

  useEffect(() => {
     inputRef.current.focus();
  },[])

  return (
    <form
      className="flex gap-3 w-full px-2 sm:px-5 md:px-[10%] lg:px-[30%]"
      onSubmit={sendMessage}
    >
      <input
        type="text"
        value={inputValue}
        ref={inputRef}
        placeholder="Enter a prompt for a search"
        className="input input-bordered w-full"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" type="submit">
        Send
      </button>
    </form>
  );
}
