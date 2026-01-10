import { MessageCircleIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";

function NoChatsFound() {
  const { setActiveTab } = useChatStore();

  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
      <div className="w-16 h-16 rounded-full bg-cyan-50 flex items-center justify-center">
        <MessageCircleIcon className="w-8 h-8 text-cyan-500" />
      </div>

      <div>
        <h4 className="text-gray-800 font-medium mb-1">No conversations yet</h4>
        <p className="text-gray-500 text-sm px-6">
          Start a new chat by selecting a contact from the contacts tab.
        </p>
      </div>

      <button
        onClick={() => setActiveTab("contacts")}
        className="px-4 py-2 text-sm text-cyan-600 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition"
      >
        Find contacts
      </button>
    </div>
  );
}

export default NoChatsFound;
