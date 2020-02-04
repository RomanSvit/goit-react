import React, { Component } from "react";
import FeedbackOption from "./feedback/FeedbackOption";
import Statistic from "./statistic/Statistic";
import Section from "./section/Section";
import Notification from "./notification/Notification";

class App extends Component {
  static defaultProps = {
    step: 1
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleClickGood = () => {
    this.setState((state, props) => ({ good: state.good + props.step }));
  };
  handleClickNeutral = () => {
    this.setState((state, props) => ({ neutral: state.neutral + props.step }));
  };
  handleClickBad = () => {
    this.setState((state, props) => ({ bad: state.bad + props.step }));
  };

  countTotalFeedback = state => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = state => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    let total = this.countTotalFeedback();
    let percent = this.countPositiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOption
            good={this.handleClickGood}
            neutral={this.handleClickNeutral}
            bad={this.handleClickBad}
            title="Statistics"
          />
          <>
            {total === 0 ? (
              <Notification message="No feedback given" />
            ) : (
              <Statistic
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positive={percent}
              />
            )}
          </>
        </Section>
      </>
    );
  }
}

export default App;
