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
import { url } from "../data/const";
import {getPortsSqlQuery} from "../sql_queries/sqls"
import containerShip from "../assets/images/custom/container_ship.png"
import {Shimmer } from 'react-shimmer'
const { Title } = Typography;
const icons = [container,watch,coming,out,coming,coming,coming]

function Ports() {
    const port =  useContext(PortContext)

  const [ports,setPort] = useState([])

  useEffect(() => {
    getPorts()
  }, []);

  const shimmerList = [1,2,3,4,5,6,7,8]

  const getPorts = async () =>  {
    const response = await axios.post(`${url}query/`,{"query":getPortsSqlQuery})
    setPort(response.data)
  }

  return (
    <>
       <img width={1000} height={500} src={containerShip} alt=""></img>
        <div className="tabled">
        {ports.length === 0?
          <ShimmerPorts list={shimmerList}/>:
          <DataPorts ports={ports} port={port}/>
        }
      </div>
    </>
  );
}

export default Ports;


function DataPorts(props){
  return(
    <Row className="rowgap-vbox" gutter={[24, 0]}>
    { props.ports.map((item, index) => (
       <Col
           key={index}
           xs={24}
           sm={24}
           md={12}
           lg={6}
           xl={6}
           className="mb-24"
       >
       <NavLink to={`/port_details/${item.id}/${item.name}`} onClick={()=> {props.port.name = item.name}}>
           <Card bordered={false} className="criclebox">
               <div className="number">
                   <Row align="middle" gutter={[24, 0]}>
                       <Col xs={18}>
                           <Title level={4}>
                               {item.name} <small className={"bnb2"}>{""}</small>
                           </Title>
                           <span>{item.type}</span>
                           <br/>
                           <span>عدد المرابط {item.ports_no}</span>
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
  )
}


function ShimmerPorts(props){
  return(
    <Row className="rowgap-vbox" gutter={[24, 0]}>
    {props.list.map((item,index) => (
            <Col
                xs={24}
                sm={24}
                md={12}
                lg={6}
                xl={6}
                className="mb-24"
            >
              <div className="number">
                        <Row align="middle" gutter={[24, 0]}>
                            <div className="mb-24 mr-10">
                                <Shimmer width={250} height={100} />
                            </div>
                        </Row>
                    </div>
            </Col>
    ))}
</Row>
  )
}
