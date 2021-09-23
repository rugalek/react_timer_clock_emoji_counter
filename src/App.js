import React, { useState } from "react";

import "./App.css";
import { Counter } from "./components/Counter";
import { Button } from "./components/Button";
import { Time } from "./components/Time";
import { Timer } from "./components/Timer";
import { EmojiList } from "./components/Emoji";
import EmojiData from "./components/Emoji/EmojiData.json";

function App() {
  return (
    <div className="App">
      <Counter background={"white"} initialCount={5} />
      <Time />
      <Timer />
      <EmojiList dataBase={EmojiData} />
    </div>
  );
}

export default App;
