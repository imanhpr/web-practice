import { useParams } from "react-router-dom";

import ChatMemberList from "../components/chat/ChatMemerList";
import ChatBox, { ChatMessage } from "../components/chat/ChatBox";
import ChatType from "../components/chat/ChatType";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { useEffect, useState } from "react";
import RoomInfo from "../components/chat/RoomInfo";

function ChatRoomPage() {
  const { roomId } = useParams<"roomId">();
  const [messageList, setMessageList] = useState<ChatMessage[]>([]);
  const [socketUrl, setSocketUrl] = useState(
    `ws://localhost:8001/room/${roomId}?token=${localStorage.getItem("token")}`
  );
  if (roomId === undefined) {
    return <h2>Something went wrong</h2>;
  }
  const ws = useWebSocket(socketUrl);
  const sendMessageHandler = (text: string) => {
    ws.sendJsonMessage({ type: "message", payload: text });
  };
  useEffect(() => {
    const newMessage = ws.lastJsonMessage as {
      id: string;
      from: { username: string; number: string };
      msg: string;
      time: number;
    } | null;
    if (!newMessage) return;
    setMessageList((msgList) => [
      ...msgList,
      {
        id: newMessage.id,
        msg: newMessage.msg,
        time: new Date(newMessage.time),
        user_name: newMessage.from.username,
      },
    ]);
  }, [ws.lastJsonMessage]);
  return (
    <div className="container rounded-lg h-screen-md my-auto bg-dark-300 my-4 mx-2 grid p-4 text-light-50 gap-x-4 gap-y-2 grid-cols-4 grid-rows-5 md:mx-auto">
      <ChatBox chatList={messageList} />
      <RoomInfo roomName={roomId} />
      <ChatMemberList />
      <ChatType onSend={sendMessageHandler} />
    </div>
  );
}

export default ChatRoomPage;
