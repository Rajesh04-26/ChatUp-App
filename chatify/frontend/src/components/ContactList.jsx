import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";

function ContactList() {
  const { getAllContacts, allContacts, setSelectedUser, isUsersLoading } =
    useChatStore();
  const { onlineUsers } = useAuthStore();

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUsersLoading) return <UsersLoadingSkeleton />;

  return (
    <div className="space-y-2">
      {allContacts.map((contact) => {
        const isOnline = onlineUsers.includes(contact._id);

        return (
          <div
            key={contact._id}
            onClick={() => setSelectedUser(contact)}
            className="flex items-center gap-3 p-3 rounded-2xl cursor-pointer
            hover:bg-blue-200 transition"
          >
            <div className="relative">
              <img
                src={contact.profilePic || "/avatar.png"}
                alt={contact.fullName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                  isOnline ? "bg-green-500" : "bg-gray-400"
                }`}
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-gray-800 font-medium truncate">
                {contact.fullName}
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
