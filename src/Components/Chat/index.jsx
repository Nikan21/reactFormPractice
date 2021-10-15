import React, { useState } from "react";
import ChatForm from "./ChatForm/index";
import Screen from "./ChatScreen/index";

export default function Chat() {
  const [initial, set] = useState([]);
  const onSubmit = (values, props) => {
    console.log(values.message);

    set((prevMessages) => {
      const newMess = {
        id: prevMessages.length,
        time: Date.now(),
      };
      
      console.log(newMess);
      const newState = [
          ...prevMessages,
          values.message]
      return newState
    });
  };
  return (
    <div>
      <ChatForm onSubmit={onSubmit} />
      <Screen chatMessages={initial} />
    </div>
  );
}
