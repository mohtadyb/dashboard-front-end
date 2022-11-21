import {Tag} from "antd";

function PortData(props) {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>الميناء</th>
                    <th>اسم السفينة</th>
                    <th>الوكيل الملاحي</th>
                    <th>الخط الملاحي</th>

                    <th hidden={props.tabe === 1?true:false}>رقم المربط</th>
                    <th>وقت الظهور</th>
                    <th hidden={props.tabe === 1?true:false}>وقت الربط</th>
                    <th>البضاعة الواردة/طن</th>

                    <th>البضاعة الصادرة/طن</th>
                    <th>جملة التفريغ</th>
                    <th>وقت وتاريخ المغادرة</th>
                    <th>الحالة</th>
                </tr>
                </thead>
                <tbody>
                { props.operations.map((item, index) => (
                    <tr key={item.id}>
                        <td>{item.port_name}</td>
                        <td>{item.ship_name}</td>
                        <td>{item.agent_name}</td>
                        <td>{item.shipping_line}</td>

                        <td hidden={props.tabe === 1?true:false}>{item.port_no}</td>
                        <td>{item.show_time}</td>
                        <td hidden={props.tabe === 1?true:false}>{item.porting_time}</td>
                        <td>{item.quantity_export_cargo}</td>

                        <td>{item.quantity_import_cargo}</td>
                        <td>{item.discharge_sentence}</td>
                        <td>{item.leaving_time}</td>
                        <td>{item.status === 1?
                            <Tag color="yellow" key={item.status}>
                                متوقعة
                            </Tag>:
                            item.status === 2?
                            <Tag color="orange" key={item.status}>
                                 في الانتظار
                            </Tag>:
                            item.status === 3?
                            <Tag color="blue" key={item.status}>
                                 تم الربط
                            </Tag>:
                            <Tag color="green" key={item.status}>
                                 غادرت
                            </Tag>}
                         </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}

export default PortData;
