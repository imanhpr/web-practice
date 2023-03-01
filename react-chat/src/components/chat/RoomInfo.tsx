import { useEffect, useState } from "react";

function RoomInfo({ roomName }: { roomName: string }) {
  const [copyFlag, setCopyFlag] = useState(false);
  const copyHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    navigator.clipboard.writeText(e.currentTarget.textContent!);
    setCopyFlag(true);
    setTimeout(() => {
      setCopyFlag(false);
    }, 1000);
  };
  return (
    <div className="border rounded-xl bg-dark-600 border-pink-500 p-4 col-start-4 row-end-2">
      <header>
        <h2 className="font-bold text-center text-2xl">Room Info</h2>
      </header>
      <p className="text-lg text-center">
        Room Id:{" "}
        <span
          onClick={copyHandler}
          className="text-amber-400 hover:cursor-pointer"
        >
          {roomName}
        </span>
      </p>
      {copyFlag && (
        <p className="text-center text-sm text-rose-400">Copied To Clipboard</p>
      )}
    </div>
  );
}
export default RoomInfo;
