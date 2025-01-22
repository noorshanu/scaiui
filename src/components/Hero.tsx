import React from "react";
import MarketAnalysis from "./MarketAynal";
import ChatScreen from "./ChatScreen";

function Hero() {
  return (
    <div className="min-h-screen px-10 pt-5 pb-2">
      <div className="flex justify-between flex-col sm:flex-row sm:gap-1 gap-4 h-full w-full">
        <div className="hidden sm:block ">
          <ChatScreen/>
        </div>
        <div className="sm:hidden">
          <img src="images/chatmob.png" alt="" className="mx-auto" />
        </div>
        <div className="h-full border border-[#37408B] rounded-xl px-6 pt-2 pb-6 mb-4 transition-opacity duration-500 ">
          <MarketAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Hero;
