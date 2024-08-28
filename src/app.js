/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let currentFavorites = [];

window.onload = function() {
  document.querySelector("#bookRow").innerHTML = generateBooks();
  let buttons = document.querySelectorAll("#btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      toggleFavorites(buttons[i].previousElementSibling.innerHTML);
    });
  }
};

const generateBooks = () => {
  let books = [
    "Atlas Shrugged",
    "Animal Farm",
    "Carmilla",
    "The Canterbury Tales",
    "Dracula"
  ];

  let bookCards = "";

  books.map((book, index) => {
    bookCards +=
      "<div class='d-flex'><h6>" +
      book +
      "</h6><button id='btn'>❤️</button><div>";
  });

  return bookCards;
};

const toggleFavorites = bookName => {
  if (currentFavorites.includes(bookName)) {
    currentFavorites = currentFavorites.filter((fav, index) => {
      return fav !== bookName;
    });
  } else {
    // currentFavorites.push(bookName) //accomplishes the same functionality
    currentFavorites = [...currentFavorites, bookName];
    // with ...
    // ['Jane Eyre','Dracula','Animal Farm']
    // without ...
    // [['Jane Eyre', 'Dracula'], 'Animal Farm']
  }
  let favList = "";
  currentFavorites.map(fav => {
    favList += "<li>" + fav + "</li>";
  });
  document.querySelector("#favoritesRow").innerHTML = favList;
};
