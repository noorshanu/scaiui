import React, { useState, useEffect } from "react";
import './ChatScreen.css';

// Custom hook for typing effect
function useTypingEffect(text, speed = 50, delay = 0) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText(""); // Reset text when effect runs
    let index = 0;
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.substring(0, index + 1)); // Use substring instead of concatenation
          index++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return displayText;
}

function ChatScreen() {
  const messages = [
    { 
      id: 1, 
      img: "images/bob2.png", 
      position: { 
        top: "2%", 
        left: "43%",
        mobileTop: "5%",    // mobile position
        mobileLeft: "35%"   // mobile position
      }, 
      text: "All agents synchronized...", 
      delay: 0 
    },
    { 
      id: 2, 
      img: "images/bob1.png", 
      position: { 
        top: "25%", 
        left: "10%",
        mobileTop: "20%",
        mobileLeft: "5%"
      }, 
      text: "Major volume spike detected...", 
      delay: 1000 
    },
    { 
      id: 3, 
      img: "images/bob4.png", 
      position: { 
        top: "25%", 
        left: "35%",
        mobileTop: "35%",
        mobileLeft: "30%"
      }, 
      text: "Formulation breakout strategy..", 
      delay: 2000 
    },
    { 
      id: 4, 
      img: "images/bob3.png", 
      position: { 
        top: "25%", 
        left: "60%",
        mobileTop: "50%",
        mobileLeft: "55%"
      }, 
      text: "All agents synchronized...", 
      delay: 3000 
    },
    { 
      id: 5, 
      img: "images/bob6.png", 
      position: { 
        top: "48%", 
        left: "20%",
        mobileTop: "65%",
        mobileLeft: "15%"
      }, 
      text: "Data validation completed...", 
      delay: 4000 
    },
    { 
      id: 6, 
      img: "images/bob5.png", 
      position: { 
        top: "48%", 
        left: "70%",
        mobileTop: "80%",
        mobileLeft: "60%"
      }, 
      text: "System performance optimal...", 
      delay: 5000 
    },
  ];

  const [visibility, setVisibility] = useState(
    messages.map(() => true) // Initially, all images are visible
  );

  const [textResets, setTextResets] = useState(messages.map(() => 0));

  useEffect(() => {
    const intervals = messages.map((_, index) => {
      return setInterval(() => {
        setVisibility((prevVisibility) => {
          const newVisibility = [...prevVisibility];
          newVisibility[index] = !newVisibility[index];
          return newVisibility;
        });
        // Increment reset counter for this message to trigger typing effect restart
        setTextResets(prev => {
          const newResets = [...prev];
          newResets[index] = prev[index] + 1;
          return newResets;
        });
      }, Math.random() * 1000 + 1000);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, [messages]);

  return (
    <div className="relative w-full mx-auto">
      {messages.map((message, index) => {
        // Add textResets[index] as a dependency to trigger re-render
        const animatedText = useTypingEffect(message.text, 50, visibility[index] ? 0 : message.delay);
        return (
          <div
            key={message.id}
            className={`absolute transition-opacity duration-1000 ease-in-out ${
              visibility[index] ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: `var(--top-position, ${message.position.top})`,
              left: `var(--left-position, ${message.position.left})`,
              ['--top-position' as any]: message.position.top,
              ['--left-position' as any]: message.position.left,
              '@media (max-width: 768px)': {
                ['--top-position' as any]: message.position.mobileTop,
                ['--left-position' as any]: message.position.mobileLeft,
              }
            }}
          >
            <div className="relative">
              <img src={message.img} alt="" className="w-auto h-auto max-w-full" />
              <p className="absolute top-3 text-xs left-4 text-white z-10">
                {animatedText}
              </p>
            </div>
          </div>
        );
      })}
     <div className=" flex justify-center items-center">
     <img src="images/chat.png" alt="" className="w-full  mx-auto" />
     </div>
    </div>
  );
}

export default ChatScreen;