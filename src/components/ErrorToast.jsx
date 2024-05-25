import { useEffect, useState } from "react";

export default function ErrorToast(prop) {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if(prop.errorMsg){
      setShowToast(true)

      const timer = setTimeout(() => {
        setShowToast(false)
        prop.handleErrorToast("")
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  },[prop.errorMsg])

  return (
    <>
      {showToast && (
        <div className="toast toast-top toast-end z-20">
          <div className="alert alert-info bg-red-200">
            <span>{prop.errorMsg}</span>
          </div>
        </div>
      )}
    </>
  );
}
