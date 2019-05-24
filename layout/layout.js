import Head from "next/head";
import MyMenu from "../components/menu";
import Sider from "../components/sidebar";
import { Row, Col } from "antd";
import MyPageHeader from "../components/page_header";

export default ({ children, title = "This is the default title" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Row>
      <header>
        <MyMenu />
      </header>
    </Row>
    <Row gutter={16}>
      <Col className="gutter-row" span={5}>
        <aside>
          <Sider />
        </aside>
      </Col>
      <Col className="gutter-row" span={18}>
        <section>{children}</section>
      </Col>
    </Row>
    <Row>
      <footer />
    </Row>
  </div>
);
