import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store";
import Examples02 from "../container/examples02";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;
    reduxStore.dispatch(serverRenderClock(isServer));

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    this.timer = startClock(dispatch);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return <Examples02 />;
  }
}

export default connect()(Index);
