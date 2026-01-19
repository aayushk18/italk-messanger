import { Apple, AppleIcon, MessageSquare } from "lucide-react";


const AuthImagePattern = ({ title, subtitle }) => {


   
  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 p-12">
      <div className="max-w-md text-center space-y-6">
        {/* Phone Mockup */}
        <div className="mx-auto w-64 h-[480px] rounded-[2.5rem] bg-black p-2 shadow-2xl">
          <div className="w-full h-full rounded-[2rem] bg-base-100 flex flex-col items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <AppleIcon className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm font-medium">iTalk Messenger</p>
            <div className="w-40 h-2 rounded-full bg-base-300 mt-4" />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">{title}</h2>
          <p className="text-base-content/60 text-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  ) 

};

export default AuthImagePattern;
