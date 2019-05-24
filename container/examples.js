import { connect } from "react-redux";
import Clock from "../components/clock";
import Counter from "../components/counter";
import Layout from "../layout/layout";

function Examples({ lastUpdate, light, coms }) {
  console.log("Example : " + coms);

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  );
}

function mapStateToProps(state) {
  const { lastUpdate, coms, light } = state;
  return { lastUpdate, light, coms };
}

export default connect(mapStateToProps)(Examples);
