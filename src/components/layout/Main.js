import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout, Affix } from "antd";
import Sidenav from "./Sidenav";
import Header from "./Header";
import Footer from "./Footer";

const { Header: AntHeader, Content, Sider } = Layout;

function Main({children}) {
  const [placement, setPlacement] = useState("right");
  const [sidenavColor, setSidenavColor] = useState("#1890ff");
  const [sidenavType, setSidenavType] = useState("transparent");
  const [fixed, setFixed] = useState(false);


  let { pathname } = useLocation();
  pathname = pathname.replace("/", "");

  useEffect(() => {
    if (pathname === "rtl") {
      setPlacement("left");
    } else {
      // setPlacement("right");
      setPlacement("left");
    }
  },[pathname]);

  return (
    <Layout
      className={`layout-dashboard ${
        pathname === "profile" ? "layout-profile" : ""
      } ${pathname === "rtl" ? "layout-dashboard-rtl" : "layout-dashboard-rtl"}`}
    >

      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        trigger={null}
        width={250}
        theme="light"
        className={`sider-primary ant-layout-sider-primary ${
          sidenavType === "#fff" ? "active-route" : ""
        }`}
        style={{ background: sidenavType }}
      >
        <Sidenav color={sidenavColor} />
      </Sider>
      <Layout>
        {fixed ? (
          <Affix>
            <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
              <Header
                name={pathname === "dashboard"?"الرئيسية":"الموانئ"}
                subName={pathname}
              />
            </AntHeader>
          </Affix>
        ) : (
          <AntHeader className={`${fixed ? "ant-header-fixed" : ""}`}>
            <Header
              name={pathname === "dashboard"?"الرئيسية":"الموانئ"}
              subName={pathname === "dashboard"?"الرئيسية":"الموانئ"}
            />
          </AntHeader>
        )}

        <Content className="content-ant">{children}</Content>
        <Footer />

      </Layout>
    </Layout>
  );
}

export default Main;
