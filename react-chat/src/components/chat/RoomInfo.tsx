function RoomInfo({ roomName }: { roomName: string }) {
  return (
    <div className="border rounded-xl bg-dark-600 border-pink-500 p-4 col-start-4 row-end-2">
      <header>
        <h2 className="font-bold text-center text-2xl">Room Info</h2>
      </header>
      <p className="text-lg">
        Room Id: <span className="text-amber-400">{roomName}</span>
      </p>
    </div>
  );
}
export default RoomInfo;
