import React, { Component } from "react";
import { fetchArticles } from "../../services/axios-api";
import ArticlesList from "./articlesList/ArticlesList";


class HomePage extends Component {
  state = {
    articles: [],
  };
  componentDidMount() {
    fetchArticles().then(item => this.setState({ articles: item }));
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <h2>Trending to Day</h2>
        <ArticlesList arrArticles={articles} />
      </>
    );
  }
}

export default HomePage;
