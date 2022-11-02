import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => console.log(data))
  };

  return (
    <div classname="quote-container">
      <div className="quote">quote_text</div>
      <div className="author">author</div>
      <div className="socials"></div>
      <button className="btn" onClick={getQuote}>
        New quote
      </button>
    </div>
  );
};

export default App;
