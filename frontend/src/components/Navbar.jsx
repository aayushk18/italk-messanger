import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { Apple, LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="fixed top-0 z-40 w-full border-b border-base-300 
      backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
  
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-all"
          >
            <div className="size-9 rounded-xl bg-black flex items-center justify-center">
              <Apple className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight">
              iTalk Messenger
            </h1>
          </Link>
  
          {/* Actions */}
          <div className="flex items-center gap-2">
  
            {/* <Link
              to="/settings"
              className="btn btn-sm gap-2 transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link> */}
  
            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="btn btn-sm gap-2"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>
  
                <button
                  onClick={logout}
                  className="btn btn-sm gap-2 text-error hover:bg-error/10"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
  
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
