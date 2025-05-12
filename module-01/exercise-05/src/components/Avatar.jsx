import React from "react";

function Avatar({ id, alt }) {
  return (
    <button className="avatar-btn">
      <img
        className="avatar"
        src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
        alt={alt}
      />
    </button>
  );
}

export default Avatar;
