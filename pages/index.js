import React from "react";
import { connect } from "react-redux";
import { startClock, serverRenderClock } from "../store";
import Examples03 from "../container/examples03";
import Layout from "../layout/layout";
import Demo from "../components/table";
class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
  }

  componentWillUnmount() {}

  render() {
    return (
      <Layout>
        <div>
          <Demo />;
        </div>
      </Layout>
    );
  }
}

export default connect()(Index);
