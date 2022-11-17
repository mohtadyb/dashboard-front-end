import {
  Row,
  Col,
  Card,
  Typography,
} from "antd";
import out from "../assets/images/custom/dashboard_icon/log-out.png";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import container from "../assets/images/custom/dashboard_icon/container.png";
import watch from "../assets/images/custom/dashboard_icon/stopwatch.png";
import coming from "../assets/images/custom/dashboard_icon/question.png";
import {NavLink} from "react-router-dom";
import {PortContext} from "../App";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import {Model} from "../components/model/model";
// import {OrbitControls} from "@react-three/drei";

const { Title } = Typography;
const icons = [container,watch,coming,out,coming,coming,coming]

function Ports() {
    const port =  useContext(PortContext)

  const [ports,setPort] = useState([])

  useEffect(() => {
    getPorts()
  }, []);

  const getPorts = async () =>  {
    const response = await axios.get("http://localhost:4000/PORTS")
    setPort(response.data)
  }

  return (
    <>
        <Canvas>
            <Suspense fallback={null}>
                <Model />
                {/*<OrbitControls />*/}
                <ambientLight intensity={0.5}/>
                <directionalLight position={[-2,5,2]} intensity={1}/>
                {/*<Environment preset="sunset" background />*/}
            </Suspense>
        </Canvas>
        <div className="tabled my-200">
       <Row className="rowgap-vbox" gutter={[24, 0]}>
           { ports.map((item, index) => (
              <Col
                  key={index}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={6}
                  xl={6}
                  className="mb-24"
              >
              <NavLink to={`/port_details/${item.ID}/${item.NAME}`} onClick={()=> {port.name = item.NAME}}>
                  <Card bordered={false} className="criclebox ">
                      <div className="number">
                          <Row align="middle" gutter={[24, 0]}>
                              <Col xs={18}>
                                  <Title level={4}>
                                      {item.NAME} <small className={"bnb2"}>{""}</small>
                                  </Title>
                                  <span>{item.TYPE + '  /  '}</span>
                                  <span>عدد المرابط {item.PORTS}</span>
                              </Col>
                              <Col xs={6}>
                                  <div className="icon-box"><img width={35} className="mb-23" src={icons[index]} alt="" /></div>
                              </Col>
                          </Row>
                      </div>
                  </Card>
              </NavLink>
              </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Ports;
