import { useState } from "react";
import { useEffect } from "react";
import { generate } from "../services/generate";

export default function ChatSection(prop) {
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    try {
      if (prop.text.length !== 0) {
        setMessage((prevMessages) => [...prevMessages, prop.text]);

        (async () => {
          const result = await generate(prop.text);
          setMessage((prevMessages) => [...prevMessages, result]);
        })();
      }
    } catch (error) {
      console.log(error, "function error");
    }
  }, [prop.text]);

  return (
    <div>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`chat ${index % 2 === 0 ? "chat-end" : "chat-start"}`}
        >
          <div className="chat-bubble">{message}</div>
        </div>
      ))}
    </div>
  );
}
