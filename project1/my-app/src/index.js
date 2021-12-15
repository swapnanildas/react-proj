import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { books } from "./books";
import Book from "./Book";
// stateless functional component
// always return JSX
// div/ section/ article or Fragment
// use camelCase for HTML attributes
// className instead of class
// close every element
// Formatting

// function Greeting() {
//   return <h4>Greetings from Abhi!this is my first react component :D</h4>;
// }

const names = ["obhi", "milli", "poly"];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

// Messier way of doing the above thing
// const Greeting = () => {
//   return React.createElement('h1',{}, 'Hello World!')
// }

ReactDOM.render(<BookList />, document.getElementById("root"));
