import React from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

const element = (
  <form>
    <label htmlFor="search-input">Search:</label>
    <input id="search-input" />
    <button aria-label="Submit" className="submit-btn">
      <img alt="" src="https://sandpack-bundler.vercel.app/img/arrow-right.svg" />
    </button>
  </form>
);

root.render(element);
