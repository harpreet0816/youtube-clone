import React from "react";
import Button from "./Button";

const lists = ["All","Gaming", "Songs", "Live", "Soccer","cricket", "Cooking", "Valentines", "Javascript", "Python", "Golang", "Rust", "Ai", "Stocks", "News", "Hockey", "Entertainment", "Pubg", "Working"] 
const ButtonList = () => {
  return (
    <div className="overflow-x-auto hide-scrollbar">
    <div className="flex">
    {lists && lists.map((button, i)=> (
      <Button key={i} name={button} />
    ))}
    </div>
    </div>
  );
};

export default ButtonList;
