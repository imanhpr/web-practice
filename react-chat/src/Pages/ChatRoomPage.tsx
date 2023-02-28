import { useParams } from "react-router-dom";
import ChatMemberList from "../components/chat/ChatMemerList";
import ChatBox from "../components/chat/ChatBox";
import ChatType from "../components/chat/ChatType";

function ChatRoomPage() {
  const { roomId } = useParams<"roomId">();
  if (roomId === undefined) {
    return <h2>Something went wrong</h2>;
  }
  const d = new Date();
  d.toLocaleTimeString();
  return (
    <div className="container rounded-lg h-screen-md my-auto bg-dark-300 my-4 mx-2 grid p-4 text-light-50 gap-x-4 gap-y-2 grid-cols-4 grid-rows-5 md:mx-auto">
      <ChatBox />
      <ChatMemberList />
      <ChatType />
    </div>
  );
}

export default ChatRoomPage;
