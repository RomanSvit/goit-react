import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const KEY = "15195208-d8c95381bc23262c5b7732742";
class App extends Component {
  state = {
    articles: [],
    webformatURL: "",
    id: "",
    largeImageURL: "",
    loading: true,
    per_page: 12
  };

  async componentDidMount() {
    console.log("object", "componentDidMount");
    const perpage = this.state.per_page;
    try {
      const data = await axios.get(
        `${BASE_URL}?q=flowers&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perpage}`
      );
      const picture = data.data.hits;
      this.setState({
        articles: picture,
        loading: false
      });
    } catch (error) {
      console.log("this error -", error);
    }
  }
  handleButton = (prev) => {
  };
  render() {
    // console.log(this.state.articles)
    const loadMore = this.handleButton;
    return (
      <>
        <Searchbar />
        <ImageGallery arr={this.state.articles} />
        <Button onClick={loadMore} />
      </>
    );
  }
}

export default App;
