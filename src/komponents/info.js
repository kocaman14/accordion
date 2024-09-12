import { useState } from "react";
import "./info.css";

const Info = ({ text, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(pre => !pre);
  };

  const symbol = isOpen ? "-" : "+";

  return (
    <div className="container" onClick={handleClick}>
      <div className="question">
        {text} <span className="button">{symbol}</span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Info;