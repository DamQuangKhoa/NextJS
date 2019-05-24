import { connect } from "react-redux";
import Layout from "../layout/layout";
import Demo from "../components/table";

function Examples({ coms }) {
  return <Demo />;
}

function mapStateToProps(state) {
  const { coms } = state;
  return { coms };
}

export default connect(mapStateToProps)(Examples);
