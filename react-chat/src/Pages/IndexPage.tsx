import { useState } from "react";
import CenterSection from "../components/CenterSection";

function IndexPage() {
  const [roomName, setRoomName] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(roomName);
  };
  return (
    <CenterSection>
      <header>
        <h2 className="font-bold text-blue-400 text-3xl capitalize">
          join or create a room
        </h2>
      </header>
      <form
        onSubmit={submitHandler}
        className="flex flex-col space-x-4 justify-center items-center sm:flex-row"
      >
        <label htmlFor="roomName">Room Name To Join :</label>
        <input
          onChange={(e) => setRoomName(e.target.value)}
          type="text"
          placeholder="Enter Room Id"
          className="rounded font-bold bg-zinc-500 text- p-2 placeholder-gray-700 text-2xl text-amber-300"
        />
        <button className="rounded bg-blue-500 py-2 px-4 transition hover:bg-blue-800">
          Join
        </button>
      </form>
      <button className="rounded bg-yellow-500 text-black py-2 px-4 transition w-1/2 hover:bg-yellow-800 hover:text-light-400">
        Create A Room
      </button>
    </CenterSection>
  );
}
export default IndexPage;
