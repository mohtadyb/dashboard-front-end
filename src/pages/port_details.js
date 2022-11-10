import {useEffect, useState} from "react";
import {Button, Card, Col, Row} from "antd";
import axios from "axios";
import {operationsSqlQuery} from "../sql_queries/sqls";
import PortData from "../components/ports_operations/port_operations";
import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";
import Title from "antd/es/typography/Title";

function PortDetails() {
    const [operations,setOperations] = useState([])
    useEffect(() => {
        console.log("useEffect method")
        getOperations()
    },[]);
    const getOperations = async () => {
        const response = await axios.post("http://localhost:4000/operations",{"query":operationsSqlQuery})
        console.log(response.data)
        setOperations(response.data)
    }

    return (
        <>
            <div className="layout-content">
                <Row className="rowgap-vbox" gutter={[24, 0]}>
                    <Col className="mb-24 mt-25">
                        <Title level={3}>حركة السفن الراسية على الارصفة</Title>
                        <PortData operations={operations}/>
                    </Col>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col className="mb-24 mt-25">
                        <Title level={3}>السفن المنتظرة للحصول على مربط</Title>
                        <PortData operations={operations}/>
                    </Col>
                </Row>
                <Row gutter={[24, 0]}>
                    <Col className="mb-24 mt-25">
                        <Title level={3}>السفن المتوقع وصولها</Title>
                        <PortData operations={operations}/>
                    </Col>
                </Row>
            </div>

        </>
    );
}

export default PortDetails;
