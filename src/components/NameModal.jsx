import { useEffect, useRef, useState } from "react";

export default function NameModal(prop) {
  const [userName, setUserName] = useState("");
  const [errorInfo, setErrorInfo] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      prop.handleTextChange(`My name is ${userName}`);
      return;
    }
    document.getElementById("my_modal_3").showModal();
    inputRef.current.focus();
  }, []);

  const setName = (e) => {
    e.preventDefault();

    if (userName.length === 0) {
      setErrorInfo(true);
      prop.handleErrorToast("Please Enter your name");

      setTimeout(() => {
        setErrorInfo(false);
      }, 2000);
      return;
    }
    prop.handleTextChange(`My name is ${userName}`);
    localStorage.setItem("userName", userName);
  };

  return (
    <div>
      <>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Hello!</h3>
            <form className="pt-6 flex gap-3 justify-center" onSubmit={setName}>
              <input
                ref={inputRef}
                type="text"
                maxLength={14}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="what's your name buddy"
                className={`input  w-full ${
                  errorInfo ? "animate-pulse border-red-600" : "input-bordered"
                }`}
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </dialog>
      </>
    </div>
  );
}
