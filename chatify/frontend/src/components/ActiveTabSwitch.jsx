import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex bg-blue-50 rounded-xl p-1 mx-4 mt-4">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
          activeTab === "chats"
            ? "bg-white text-blue-600 shadow"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
          activeTab === "contacts"
            ? "bg-white text-blue-600 shadow"
            : "text-gray-500 hover:text-blue-600"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}

export default ActiveTabSwitch;
