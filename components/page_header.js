import { PageHeader } from "antd";

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu"
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu"
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu"
  }
];
class MyPageHeader extends React.Component {
  render() {
    return <PageHeader title={this.props.title} breadcrumb={{ routes }} />;
  }
}
export default MyPageHeader;
