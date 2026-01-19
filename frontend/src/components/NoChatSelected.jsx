import { Apple, MessageSquare } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
  
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div
            className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center
            animate-bounce"
          >
            <Apple className="w-8 h-8 text-white" />
          </div>
        </div>
  
        {/* Welcome Text */}
        <h2 className="text-2xl font-semibold tracking-tight">
          Welcome to iTalk Messenger
        </h2>
  
        <p className="text-base-content/60 text-sm">
          Choose a conversation from the sidebar to start chatting.
        </p>
      </div>
    </div>
  );
};

export default NoChatSelected;
