import React from "react";
import EmtyMessage from "../components/EmtyMessage";

function ListMessage({ messages }) {
  let lengthMessages = messages.length - 1;
  let checkLengthMessage = lengthMessages > 0 ? true : false;
  return <>{!checkLengthMessage && <EmtyMessage />}</>;
}

export default ListMessage;
