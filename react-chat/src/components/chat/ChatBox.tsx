import { useContext } from "react";
import { useJwt } from "react-jwt";
import { AuthCtx, UserToken } from "../../context/auth-context";

export type ChatMessage = {
  id: string;
  user_name: string;
  msg: string;
  time: Date;
};
function ChatBox({ chatList }: { chatList: Array<ChatMessage> }) {
  const auth = useContext(AuthCtx)!;
  const { decodedToken } = useJwt<UserToken>(auth.authState.token);
  const renderedChat = chatList.map((rawChat) => {
    const format =
      rawChat.user_name === decodedToken?.user_name
        ? ["justify-start", "bg-blue-900"]
        : ["justify-end", "bg-rose-900"];
    const [direction, color] = format;
    return (
      <div key={rawChat.id} className={`flex ${direction}`}>
        <div
          className={`flex flex-row space-x-1 ${color} rounded-2xl w-max py-1 px-4 text-2xl`}
        >
          <span>{rawChat.user_name} :</span>
          <p>{rawChat.msg}</p>
          <span className="text-sm self-end">
            {rawChat.time.toLocaleTimeString()}
          </span>
        </div>
      </div>
    );
  });
  return (
    <div className="border rounded-xl space-y-4 bg-dark-600 border-green-500 p-4 col-span-3 row-span-4">
      {renderedChat}
    </div>
  );
}

export default ChatBox;
