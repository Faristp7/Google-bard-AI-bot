import { useState } from "react";
import ChatSection from "../components/ChatSection";
import NameModal from "../components/NameModal";
import SearchInputBox from "../components/SearchInputBox";
import ErrorToast from "../components/ErrorToast";

export default function DashBoard() {
  const [text, setText] = useState("");
  const [errorToast, setErrorToast] = useState("");

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleErrorToast = (value) => {
    setErrorToast(value);
  };

  return (
    <div className="sm:p-2">
      {/* <div className="fixed right-0 sm:right-3 p-3 z-10">
        <ThemeManagment />
      </div> */}

      {/* search input area */}
      <div className="fixed bottom-4 w-full z-10">
        <SearchInputBox handleTextChange={handleTextChange} />
      </div>

      {/* chat section */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pt-12 pb-16 sm:pb-20 overflow-hidden">
        <div className="h-full overflow-y-auto p-3">
          <ChatSection text={text} />
        </div>
      </div>

      {/* modal */}
      <div>
        {text.length === 0 && (
          <NameModal
            handleTextChange={handleTextChange}
            handleErrorToast={handleErrorToast}
          />
        )}
      </div>

      {/* Error Toast */}
      <div>
        <ErrorToast errorMsg={errorToast} handleErrorToast={handleErrorToast} />
      </div>
    </div>
  );
}
