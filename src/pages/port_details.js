import {useEffect, useState} from "react";
import {Card, Col, Row} from "antd";
import {useParams} from "react-router-dom"
import axios from "axios";
import {operationsSqlQuery} from "../sql_queries/sqls";
import Title from "antd/es/typography/Title";
import ship_cargo from "../assets/images/custom/dashboard_icon/cargo-ship.png"
import "../assets/styles/tabs_style.css";
import PortData from "../components/ports_operations/port_operations";
import { url } from "../data/const";

function PortDetails() {

    const [operations,setOperations] = useState([])
    const [tabSelect,setTabSelect] = useState(1)

    const {portId} =  useParams()

    useEffect(() => {
        getOperations()
    },[]);

    const getOperations = async () => {
        setOperations([])
        const response = await axios.post(`${url}query/`,{"query":operationsSqlQuery(portId)})
                  console.log(response.data)
        setOperations(response.data)
    }


    function handleChange(value) {
        setTabSelect(+value.target.value)
    }


    function countShipShow(status){
        return operations.filter((item)=> {
            return  +item.status === status
        }).length
    }

    function filterOperations(status){
        return operations.filter((item)=> {
            return  +item.status === status
        })
    }

    const count = [
        {
            today: "البواخر المتوقعة خلال الفترة القادمة",
            title: countShipShow(1),
            persent: "باخرة",
            icon: ship_cargo,
            bnb: "bnb2",
        },
        {
            today: "البواخر في الانتظار",
            title: countShipShow(2),
            persent: "باخرة",
            icon: ship_cargo,
            bnb: "bnb2",
        },
        {
            today: "البواخر الراسية",
            title: countShipShow(3),
            persent: "باخرة",
            icon: ship_cargo,
            bnb: "bnb2",
        },
        {
            today: "البواخر المغادرة",
            title: countShipShow(4),
            persent: "باخرة",
            icon: ship_cargo,
            bnb: "bnb2",
        }
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
                            color="red"
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
                 <div className="tabs">
                     <input type="radio" value={3} onChange={handleChange} id="tab1"  name="tab-control"/>
                     <input type="radio" value={2} onChange={handleChange} id="tab2" name="tab-control"/>
                     <input type="radio" value={1} onChange={handleChange} id="tab3" name="tab-control"/>
                     <ul>
                         <li title="Delivery Contents"><label htmlFor="tab1" role="button">
                             <br/><span>حركة السفن الراسية على الارصفة</span></label></li>
                         <li title="Shipping"><label htmlFor="tab2" role="button">
                             <br/><span>السفن المنتظرة للحصول على مربط</span></label></li>
                         <li title="Returns"><label htmlFor="tab3" role="button">
                             <br/><span>السفن المتوقع وصولها</span></label></li>
                     </ul>
                     <div className="slider">
                         <div className="indicator"></div>
                     </div>
                     <div className="content">
                         <PortData tabe={tabSelect} operations={filterOperations(tabSelect)}/>
                     </div>
                 </div>
             </div>
        </>
    );
}

export default PortDetails;
