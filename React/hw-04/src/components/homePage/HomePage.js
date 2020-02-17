import React, { Component } from "react";
import axios from "axios"

// const BASE_URL = "https://api.themoviedb.org/3/";
const KEY = "6760bd47a4eee027c4d8920912c403b1";

class HomePage extends Component {
  state = {};
  fetchArticles = async () => {
   
    try {
      const data = await axios.get(
        `https://developers.themoviedb.org/3/trending/get-trending/${KEY}`
      );
      console.log(data);
    } catch (error) {
      console.log("this error -", error);
      throw new Error(error);
    }
  };
  render() {
    return <></>;
  }
}

export default HomePage;
