import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState("");
  const colors = ['#122932', '#FFBF46', '#9B5094', '#0B7A75', '#ED254E', '#FF8811', '#004643', '#AFC97E', '#890620', '#171A21', '#1F271B'];
  const textRef = useRef();
  const bgRef = useRef();
  let randomColor = colors[Math.floor(Math.random() * colors.length)]
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

  useEffect(() => {
    textRef.current.style.color = randomColor
  }, [quotes]);

  useEffect(() => {
    bgRef.current.style.backgroundColor = randomColor
  }, [quotes]);


  return (
    <div className='App' ref={bgRef}>
      <div classname="quote" ref={textRef}>
          <p>{quotes.text}</p>
          <p>{quotes.author}</p>
          <div classname='btn-container'>
            <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} target='_blank' rel='noreferrer' className='btn'>Twitter</a>
            <button className="btn" onClick={getQuote}>New quote</button>
          </div>
      </div>
    </div>
  );
};

export default App;
