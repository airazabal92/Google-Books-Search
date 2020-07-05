import axios from "axios";

export default {
  searchBooks: function (bookSearch) {
    console.log("search");
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        bookSearch +
        "&key=" +
        process.env.REACT_APP_GOOGLE_API_KEY
    );
  }
};
