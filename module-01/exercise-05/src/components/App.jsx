import React from "react";
import Avatar from "./Avatar";

const avatars = [
  {
    id: "001",
    alt: "person with curly hair and a black T-shirt",
  },
  {
    id: "002",
    alt: "person wearing a hijab and glasses",
  },
  {
    id: "003",
    alt: "person with short hair wearing a blue hoodie",
  },
  {
    id: "004",
    alt: "person with a pink mohawk and a raised eyebrow",
  },
];

function App() {
  return (
    <div className="avatar-set">
      {avatars.map((avatar) => (
        <Avatar key={avatar.id} id={avatar.id} alt={avatar.alt} />
      ))}
    </div>
  );
}

export default App;
