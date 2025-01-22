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
        <div className="h-full ">
          <MarketAnalysis />
        </div>
      </div>
    </div>
  );
}

export default Hero;
