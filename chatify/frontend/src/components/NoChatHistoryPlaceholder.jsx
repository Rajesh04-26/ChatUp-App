import { MessageCircleIcon } from "lucide-react";

function NoChatHistoryPlaceholder({ name }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
        <MessageCircleIcon className="w-8 h-8 text-cyan-500" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Start chatting with {name}
      </h3>

      <p className="text-sm text-gray-500 max-w-sm mb-6">
        This is the beginning of your conversation. Send a message to break the ice.
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <button className="px-4 py-2 text-xs font-medium text-cyan-600 bg-cyan-50 rounded-full hover:bg-cyan-100 transition">
          👋 Say hello
        </button>
        <button className="px-4 py-2 text-xs font-medium text-cyan-600 bg-cyan-50 rounded-full hover:bg-cyan-100 transition">
          🤝 How are you?
        </button>
        <button className="px-4 py-2 text-xs font-medium text-cyan-600 bg-cyan-50 rounded-full hover:bg-cyan-100 transition">
          📅 Meet up soon?
        </button>
      </div>
    </div>
  );
}

export default NoChatHistoryPlaceholder;
