function ChatType() {
  return (
    <div className="border rounded-xl border-indigo-500 col-span-3">
      <form className="rounded-xl flex space-x-4 bg-dark-600">
        <textarea
          name=""
          className="rounded-xl bg-dark-600 h-34 p-4 text-light-100 text-4xl w-11/12"
        ></textarea>
        <div className="flex w-1/12 items-center justify-center">
          <button className="rounded bg-blue-500 py-2 px-4 transition hover:bg-blue-800">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatType;
