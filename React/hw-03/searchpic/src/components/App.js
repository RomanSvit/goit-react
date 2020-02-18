import React, { Component } from "react";
import Searchbar from "./searchbar/Searchbar";
import ImageGallery from "./imageGallery/ImageGallery";
import Button from "./button/Button";
import axios from "axios";
import Loader from "react-loader-spinner";
import Modal from "./modal/Modal";
import css from "../components/App.module.css";

const BASE_URL = "https://pixabay.com/api/";
const KEY = "15195208-d8c95381bc23262c5b7732742";
const loaderCss = { margin: "0 auto" };
let currentquery;
class App extends Component {
  state = {
    articles: [],
    isModalOpen: false,
    loading: true,
    currentImage: "",
    per_page: 12,
    page: 1
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  fetchArticles = async (page = 1, query) => {
    if (query) {
      currentquery = query;
    }
    try {
      const data = await axios.get(
        `${BASE_URL}?q=${currentquery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      return data.data.hits;
    } catch (error) {
      console.log("this error -", error);
      throw new Error(error);
    }
  };

  transform = data =>
    data.map(elem => ({
      id: elem.id, //уникальный идентификатор
      smallImage: elem.webformatURL, //ссылка на маленькое изображение для списка карточек
      largeImage: elem.largeImageURL //ссылка на большое изображение для модального окна
    }));

  componentDidMount() {
    const { page } = this.state;
    this.handleFetchGallery(page, "all");
  }

  handleFetchGallery = async (page, query) => {
    try {
      const data = await this.fetchArticles(page, query);
      this.setState({ articles: this.transform(data), isLoading: false });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    }

    window.addEventListener("keydown", this.handleKeyPress);
  };

  handleButton = async () => {
     this.setState({ isLoading: true });

     const nextPage = this.state.page + 1;
     const data = await this.fetchArticles(nextPage);

     this.setState(prevState => {
       return {
         articles: [...prevState.articles, ...this.transform(data)],
         page: nextPage,
         isLoading: false
       };
     });
     window.scrollTo({
       top: document.documentElement.scrollHeight,
       behavior: "smooth"
     });
  };

  handleClickBox = e => {
    const { articles } = this.state;
    const fined = articles.find(
      elem => parseInt(elem.id) === parseInt(e.target.id)
    );

    if (fined) {
      this.setState({ currentImage: fined.largeImage });
      this.openModal();
    }
  };

  handleKeyPress = e => {
    if (e.code !== "Escape") return;
    this.closeModal();
  };

  handleBackdropClick = e => e.target === e.currentTarget && this.closeModal();

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    const loadMore = this.handleButton;
    const { articles, isLoading, isModalOpen, currentImage } = this.state;
    return (
      <div className={css.App} onClick={this.handleClickBox}>
        <Searchbar onSubmit={this.handleFetchGallery} />
        {articles.length > 0 && <ImageGallery arr={articles} />}
        {isLoading && (
          <Loader
            style={loaderCss}
            type="ThreeDots"
            color="#somecolor"
            height={80}
            width={80}
          />
        )}
        {articles.length > 0 && <Button onClickButton={loadMore} />}
        {isModalOpen && (
          <Modal
            onClose={this.closeModal}
            onClick={this.handleBackdropClick}
            reference={currentImage}
          />
        )}
      </div>
    );
  }
}
export default App;
