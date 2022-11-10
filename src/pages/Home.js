
import {
  Card,
  Col,
  Row,
  Typography,
} from "antd";

import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";
import container from "../assets/images/custom/dashboard_icon/container.png";
import watch from "../assets/images/custom/dashboard_icon/stopwatch.png";
import coming from "../assets/images/custom/dashboard_icon/question.png";
import out from "../assets/images/custom/dashboard_icon/log-out.png";

// import container from "../assets/images/custom/dashboard_icon/container.svg"
function Home() {
  const { Title } = Typography;

  const count = [
    {
      today: "عدد الحاويات",
      title: "90,000",
      persent: "حاوية",
      icon: container,
      bnb: "bnb2",
    },
    {
      today: "المواشي",
      title: "34,000",
      persent: "راس",
      icon: watch,
      bnb: "bnb2",
    },
    {
      today: "البضائع العامة",
      title: "46,000",
      persent: "طبلية",
      icon: coming,
      bnb: "bnb2",
    },
    {
      today: "المواد البترولية",
      title: "13,4000",
      persent: "برميل",
      icon: out,
      bnb: "bnb2",
    },
  ];


  return (
    <>
      <div className="layout-content">
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
              <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{c.today}</span>
                      <Title level={3}>
                        {c.title} <small className={c.bnb}>{c.persent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box"><img width={35} className="mb-23" src={c.icon} alt="" /></div>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={10} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <Echart />
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={14} className="mb-24">
            <Card bordered={false} className="criclebox h-full">
              <LineChart />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
