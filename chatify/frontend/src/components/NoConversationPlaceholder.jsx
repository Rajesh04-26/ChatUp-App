import { MessageCircleIcon } from "lucide-react";

function NoConversationPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-6">
      <div className="w-20 h-20 rounded-full bg-cyan-50 flex items-center justify-center mb-6">
        <MessageCircleIcon className="w-10 h-10 text-cyan-500" />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        Select a conversation
      </h3>

      <p className="text-gray-500 max-w-md">
        Choose a contact from the sidebar to start chatting or continue a previous conversation.
      </p>
    </div>
  );
}

export default NoConversationPlaceholder;
