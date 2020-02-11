import React, { Component } from "react";
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from "./button/Button";

class App extends Component {
  state = {};
  render() {
    return <>
    <Searchbar />
    <ImageGallery />
    <Button />
    </>;
  }
}

export default App;
