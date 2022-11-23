import React, { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const [quotes, setQuotes] = useState("");
  const colors = ['#122932', '#FFBF46', '#9B5094', '#0B7A75', '#ED254E', '#FF8811', '#004643', '#AFC97E', '#890620', '#171A21', '#1F271B', '#2A3D45' , '#8C1C13' , '#EC9A29', '#1AC8ED' , '#157F1F' , '#0F8B8D'];
  const textRef = useRef();
  const bgRef = useRef();
  const btnRef = useRef();
  const tweetRef = useRef();
  let randomColor = colors[Math.floor(Math.random() * colors.length)]

// fetching quotes from api

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

  // refs for color changing

  useEffect(() => {
    textRef.current.style.color = randomColor
  }, [quotes]);

  useEffect(() => {
    bgRef.current.style.backgroundColor = randomColor
  }, [quotes]);

  useEffect(() => {
    btnRef.current.style.backgroundColor = randomColor
  }, [quotes]);

  useEffect(() => {
    tweetRef.current.style.color = randomColor
  }, [quotes]);


  return (
    <div className='App' ref={bgRef}>
      <div className='quote-container' ref={textRef}>
          <p className='quote'>"{quotes.text}"</p>
          <p className='author'>- {quotes.author}</p>
          <div className='btn-container'>
            <a href={`https://twitter.com/intent/tweet?text=${quotes.text}${quotes.author}`} className='tweet' target='_blank' rel='noreferrer' ref={tweetRef}>Tweet quote</a>
            <button className="btn" onClick={getQuote} ref={btnRef}>New quote</button>
          </div>
      </div>
    </div>
  );
};

export default App;
