import React, { useState, useEffect } from "react";
import "./index.css";

const App = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuotes(data[randomNum]);
    });
  };


  useEffect(() => {
    getQuote();
  },[]);

  return (
    <div classname="quote-container">
      <div className="quote">
        <p>{quotes.text}</p>
       </div>
      <div className="author">
        <p>{quotes.author}</p>
      </div>
      <div className="twitter">
        <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target='_blank' rel='noreferrer' className='btn'>Twitter</a>
      </div>
      <button className="btn" onClick={getQuote}>New quote</button>
    </div>
  );
};

export default App;
