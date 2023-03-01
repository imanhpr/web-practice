function ChatMemberList() {
  return (
    <aside className=" border rounded-xl bg-dark-600 border-yellow-500 p-4 col-start-4 row-start-2 row-span-4">
      <header className="border-b border-b-yellow-500 mb-3">
        <h2 className="font-bold text-center text-2xl text-amber-500">
          Members
        </h2>
        <p className="text-center text-lg">Current Member In The Room : 4</p>
      </header>
      <ul className="flex flex-col font-semibold text-xl text-2xl">
        <li>- Imanhpr</li>
        <li>- Ali</li>
      </ul>
    </aside>
  );
}

export default ChatMemberList;
