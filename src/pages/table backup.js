import {
    Row,
    Col,
    Card,
    Typography,
} from "antd";
import out from "../assets/images/custom/dashboard_icon/log-out.png";
import {useEffect, useState} from "react";
import axios from "axios";

const { Title } = Typography;

const count = [
    {
        today: "Cattle",
        title: "ميناء هيدوب",
        persent: "",
        icon: out,
        bnb: "bnb2",
    },
];

function Tables() {

    const [ports,setPort] = useState()

    useEffect(() => {
        console.log("useEffect method")
        getPorts()

    }, []);


    const getPorts = async () =>  {
        const response = await axios.get("http://localhost:4000/PORTS")

        setPort(response.data)

        // console.log(ports)
    }

    return (
        <>
            <div className="tabled my-200">
                {/*
        <Row className="rowgap-vbox" gutter={[24, 0]}>
          {ports.map((item, index) => (
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
                        <Title level={4}>
                          {item.NAME} <small className={"bnb2"}>{""}</small>
                        </Title>
                        <span>{item.PORT}</span>
                      </Col>
                      <Col xs={6}>
                        <div className="icon-box"><img width={35} className="mb-23" src={"out"} alt="" /></div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Col>
          ))}
        </Row>
*/}

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
                                            <Title level={4}>
                                                {c.title} <small className={c.bnb}>{c.persent}</small>
                                            </Title>
                                            <span>{c.today}</span>
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
            </div>
        </>
    );
}

export default Tables;
