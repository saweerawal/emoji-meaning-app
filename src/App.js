import React, { useState } from "react";
import "./styles.css";



var emojiDictionary = {
  "😊": "Smiling",
  "😂": "Face with Tears of Joy",
  "😳": "Disbelief",
  "😔": "Sad",
  "🥡": "Takeout box",
  "❤️": "Love",
  "😑": "Annoyance",
  "🥰": "Smiling Face with Hearts",
  "🤩": "Star-Struck",
  "😛": "Face with Tongue",
  "🤣": "Rolling on the Floor Laughing"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {

  const [meaning, setMeaning] = useState("");
  function searchEmoji(event){
    var meaning = "";
    var useremoji = event.target.value;
    if (useremoji in emojiDictionary){
        meaning = emojiDictionary[useremoji];
    }
    else if(useremoji !== ""){
      meaning = "We don't have this emoji in our database!!"
    }
    setMeaning(meaning);
  }

  function clickedEmoji(item){
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>What an emoji mean?</h1>
      <input onChange={searchEmoji} placeholder="search from here"></input>
      <h2>{meaning}</h2>
      <ul>
        {
          emojiArray.map(function(emoji){
            return(
              <span 
              key={emoji} 
              onClick={()=>clickedEmoji(emoji)}
              style={{padding:"0.5rem", fontSize: "2rem", cursor:"pointer"}}>
              {emoji}
              </span>
            )
          })
        }
      </ul>
    </div>
  );
}
