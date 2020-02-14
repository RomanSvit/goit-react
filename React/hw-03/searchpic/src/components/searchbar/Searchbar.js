/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import css from "../searchbar/Searchbar.module.css";
class Searchbar extends Component {
  state = { query: "" };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(1, this.state.query);
    this.setState({ query: "" });
    e.target.children[1].value = "";
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <header className={css.Searchbar}>
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
        </header>
      </>
    );
  }
}

export default Searchbar;
