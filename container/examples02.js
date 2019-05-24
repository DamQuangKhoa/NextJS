import { connect } from "react-redux";
import Layout from "../layout/layout";
import Competiion from "../components/competiion";

function Examples({ coms }) {
  return (
    <Layout>
      <div>
        <Competiion />
      </div>
    </Layout>
  );
}

function mapStateToProps(state) {
  const { coms } = state;
  return { coms };
}

export default connect(mapStateToProps)(Examples);
