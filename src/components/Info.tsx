import React, { useEffect, useState } from "react";

const Info: React.FC = () => {
  const fullText =
    "Excuse me, this project was built as part of a company program and the repository is private";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      setDisplayedText(fullText.slice(0, currentIndex));
      if (currentIndex === fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-[200px] w-full">
      <h2 className="text-[#EFBF04] text-lg">{displayedText}</h2>
    </div>
  );
};

export default Info;
