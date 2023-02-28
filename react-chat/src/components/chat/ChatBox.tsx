function ChatBox() {
  const d = new Date();
  return (
    <div className="border rounded-xl space-y-4 bg-dark-600 border-green-500 p-4 col-span-3 row-span-4">
      <div className="flex justify-start">
        <div className="flex flex-row space-x-1 bg-blue-900 rounded-2xl w-max py-1 px-4 text-2xl">
          <span>Iman :</span>
          <p>Chetory to</p>
          <span className="text-sm self-end">{d.toLocaleTimeString()}</span>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row space-x-1 bg-rose-900 rounded-2xl w-max py-1 px-4 text-2xl">
          <span>Ali :</span>
          <p>Eradat Nokaram</p>
          <span className="text-sm self-end">{d.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
