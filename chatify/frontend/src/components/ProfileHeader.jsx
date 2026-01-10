import { useState, useRef } from "react";
import { LogOutIcon, VolumeOffIcon, Volume2Icon } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const clickSound = new Audio("/sounds/mouse-click.mp3");

function ProfileHeader() {
  const { logout, authUser, updateProfile } = useAuthStore();
  const { isSoundEnabled, toggleSound } = useChatStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="p-4 flex items-center justify-between 
      bg-gradient-to-r from-blue-500 to-blue-600 text-white border-b border-blue-700">
      <div className="flex items-center gap-3">
        <div className="relative">
          <button
            className="w-14 h-14 rounded-full overflow-hidden group border-2 border-white"
            onClick={() => fileInputRef.current.click()}
          >
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span className="text-white text-xs">Change</span>
            </div>
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>

        <div>
          <h3 className="font-medium text-base max-w-[180px] truncate">
            {authUser.fullName}
          </h3>
          <p className="text-sm opacity-80">Online</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="hover:text-gray-200 transition"
          onClick={logout}
        >
          <LogOutIcon className="w-5 h-5" />
        </button>

        <button
          className="hover:text-gray-200 transition"
          onClick={() => {
            clickSound.currentTime = 0;
            clickSound.play().catch(() => {});
            toggleSound();
          }}
        >
          {isSoundEnabled ? (
            <Volume2Icon className="w-5 h-5" />
          ) : (
            <VolumeOffIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProfileHeader;
