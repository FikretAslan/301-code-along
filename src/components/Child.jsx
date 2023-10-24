import logopic from "../assets/logo-pic.png";
import { useState } from "react";

export default function Child({ name }) {
  useState();
  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <>
      <h2>{name} is the child</h2>
      <img src={logopic} onClick={handleLikes} />
      <span>❤️ {likes}</span>
    </>
  );
}
