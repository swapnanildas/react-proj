import React from "react";

const Book = (props) => {
  // console.log(props);
  // attribute, eventHandler
  // onClick, onMouseOver

  const { image, author, title } = props;

  const clickHandler = () => {
    alert("Hello World!");
  };
  return (
    <article
      className="book"
      onMouseOver={() => console.log("Mouse over " + title)}
    >
      <img src={image}></img>
      <h1
        onClick={() => {
          console.log(title);
        }}
      >
        {title}
      </h1>
      <h3
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h3>
      <button type="button" onClick={clickHandler}>
        Buy
      </button>

      <button type="button" onClick={() => console.log(author)}>
        More_Complex_Button
      </button>
    </article>
  );
};

export default Book;
