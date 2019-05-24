import { Menu, Icon } from "antd";

import Link from "next/link";
class MyMenu extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Link href="/">
            <a>
              <Icon type="mail" />
              Home
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link href="">
            <a>
              <Icon type="mail" />
              Contact
            </a>
          </Link>
        </Menu.Item>
        <Menu.Item key="abouts">
          <Link href="">
            <a>
              <Icon type="mail" />
              About
            </a>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default MyMenu;
