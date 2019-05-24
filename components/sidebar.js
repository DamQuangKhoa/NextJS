import { Menu, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Management</span>
            </span>
          }
        >
          <MenuItemGroup key="g1" title="Match">
            <Menu.Item key="1">List Match</Menu.Item>
            <Menu.Item key="2">Edit Match</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="Team">
            <Menu.Item key="3">List Team</Menu.Item>
            <Menu.Item key="4">Edit Team</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup key="g3" title="Rank">
            <Menu.Item key="5">Rank </Menu.Item>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
  }
}
export default Sider;
