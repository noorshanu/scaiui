import React, { useState, useEffect } from "react";
import "./ChatScreen.css";

// Custom hook for typing effect
const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

function ChatScreen() {
  const messageText = "Major volume spike detected on BTC/USD. Processing 1m+ datapoints...";
  const [visibleChats, setVisibleChats] = useState<number[]>([]);

  // Randomly change visible chats
  useEffect(() => {
    const interval = setInterval(() => {
      const numToShow = Math.floor(Math.random() * 3) + 1; // Random number between 1-3
      const availableIndices = Array.from({ length: 6 }, (_, i) => i);
      const selectedIndices: number[] = [];
      
      // Randomly select n indices where n is numToShow
      for (let i = 0; i < numToShow; i++) {
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        selectedIndices.push(availableIndices[randomIndex]);
        availableIndices.splice(randomIndex, 1);
      }
      
      setVisibleChats(selectedIndices);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const typedText = useTypewriter(messageText);

  const chatImages = [
    "chat.png", "chat2.png", "chat3.png",
    "chat4.png", "chat5.png", "chat8.png"
  ];

  return (
    <div className="relative w-full mx-auto">
      <div className="flex justify-center flex-col gap-3 items-center">
        {chatImages.map((image, index) => (
          <div
            key={index}
            className={`relative chat-box ${visibleChats.includes(index) ? 'fade-in' : 'fade-out'}`}
          >
            <img src={`images/${image}`} alt="" className="w-full mx-auto" />
            <p className="text-white text-sm absolute top-[55%] left-[15%]">
              {typedText}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatScreen;
