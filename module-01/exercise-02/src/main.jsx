import React from "react";
import { createRoot } from "react-dom/client";
import { formatDate } from "./date-helpers";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

const message = {
  content:
    'Just ate at “Les Corbeaux En Colère”. Wonderful little venue!',
  published: '2024-03-14T15:09:26.000Z',
  author: {
    avatarSrc: 'https://sandpack-bundler.vercel.app/img/avatars/009.png',
    avatarDescription: 'Cartoon bear',
    name: 'Ben Thorn',
    handle: 'benjaminthorn',
  }
};

const element = (
  <article style={{ filter: 'var(--shadow-elevation-high)' }}>
    <header>
      <img alt={ message.author.avatarDescription } src={ message.author.avatarSrc } />
      <a href={ "/users/" + message.author.handle }>{ message.author.name }</a>
    </header>
    <p>
      { message.content }
    </p>
    <footer>
      Posted
      <time dateTime={message.published}>
        { formatDate(message.published) }
      </time>
    </footer>
  </article>
);

root.render(element);
