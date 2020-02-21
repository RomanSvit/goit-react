import React, { Component } from "react";
import css from "./Movies.module.css";
import { searchForKeyWord } from "../../services/axios-api";
import SearchPage from "./searchPage/SearchPage";
import queryString from "query-string";

class MoviesPage extends Component {
  state = { query: "", items: null, error: null };

  async componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    // console.log(queryParams.query);
    const data = await searchForKeyWord(queryParams.query);
    this.setState({ items: data });
  }
  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { query } = this.state;
    const data = await searchForKeyWord(this.state.query);
    this.setState({ items: data, query: "" });
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `?query=${query}`
    });
  };

  render() {
    const { query } = this.state;
    const { items } = this.state;
    const { history } = this.props;
    // console.log(history);
    return (
      <>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            value={query}
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
        {items && <SearchPage arr={items} prop={history} />}
      </>
    );
  }
}

export default MoviesPage;
